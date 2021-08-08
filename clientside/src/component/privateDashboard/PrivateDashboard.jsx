// import React, { useEffect, useState } from "react";
// import "./dashboard.css";
// import logo from "../../assets/logo.jpeg";
// import Public from "../../assets/public.png";
// import Private from "../../assets/private.png";
// import mine from "../../assets/mygroups.png";
// import hive from "../../assets/hivetext.jpeg";
// import Publiccard from "../Public room/publiccard";
// import axios from "axios"
// import { Redirect, useHistory } from "react-router";
// import styled from "styled-components"
// import { Button, Modal, Paper, TextField } from "@material-ui/core";
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles((theme) => ({
//   paper: {
//     position: 'absolute',
//     width: 400,
//     backgroundColor: theme.palette.background.paper,
//     border: '2px solid #000',
//     boxShadow: theme.shadows[5],
//     padding: theme.spacing(2, 4, 3),
//   },
// }));


// const  PrivateDashboard = () => {

//   const classes = useStyles();
//   const [Publics, setpublic] = useState(true)
//   const [privates, setprivate] = useState(false)
//   const [profile, setprofile] = useState(false)
//   const [groups, setGroups]= useState([])
//   const [popup, setPopup] = useState(false)
//   const [title, setTitle] = useState("")
//   const [desc, setDesc] = useState("")
//   const [open, setOpen] = React.useState(false);
//   const [query, setQuery] = useState("")
//   const [searchData, setSearchData] = useState([])
//   // const [restData, setRestData] = useState([])
//   // const [concats, setConcat] = 

//   const handleOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const handleSearch = () => {
//     axios.get(`http://localhost:1997/search?s=${query}`)
//     .then((res) => searchParams(res.data.data))
//     .catch((err) => console.log(err))
// }

//   const searchParams= (data) => {
//     setSearchData(data)
//     let rest = []

//     for(let i=0; i<groups.length; i++){
//       for(let j=0; j<searchData.length; j++){
//         if(groups[i]._id !== searchData[j]._id){
//           rest.push(groups[i])
//         }
//       }
//     }
//     // let rest = groups?.filter((i, index) => i.group_name !== searchData[index].group_name)
//     console.log(groups)
//     if(searchData){
//       setGroups([...searchData, ...rest])
//     }
//   }

//   // useEffect(() => {
//   //   searchParams()
//   // },[groups])

//   const loginedUserId = JSON.parse(localStorage.getItem("user"))
//   const history = useHistory()


//   useEffect(() => {
//     axios.get("http://localhost:1997/newGroup")
//     .then((response) =>setGroups(response.data))
//   }, [open])

//   const handlepublic=()=>{ 
//     setpublic(true)
//     setprofile(false)
//     setprivate(false)
//   }
//   const handleprivate=()=>{ 
//     setpublic(false)
//     setprofile(false)
//     setprivate(true)
    
//   }
//   const handleprofile=()=>{ 
//     setpublic(false)
//     setprofile(true)
//     setprivate(false)
//   }
//   const handleLogout = ()=>{
//     localStorage.clear()
//     history.push("/")

//   }
//     // loginedUserId = JSON.parse(loginedUserId)
//   useEffect(()=>{
//     if(!loginedUserId){
//       history.push("/login")
//     }
//   },[loginedUserId])

//   const createGroup = () => {
//     const payload = {
//       group_name: title,
//       description: desc
//     }

//     axios.post("http://localhost:1997/newGroup", payload)
//     .then((res) => handleClose())
//     .catch((err) => console.log(err))
//     setTitle("")
//     setDesc("")
//   }


//   return (
//     <>
//       <div className="dashboardBody">
       
//         <div className="container">

//           <div className="profiles">
//             {/* <img className="logo" src={logo} alt="" /> */}
//             <div className="newone">
//                         U
//                     </div>
//             <div className="profiles-container" onClick={handlepublic}>
//               <img src={Public} alt="" />
//               <strong>Public</strong>
//               <strong>Groups</strong>

//             </div>
//             <div className="profiles-container" onClick={handleprivate}>
//               <img src={Private} alt="" />
//               <strong>Private</strong>
//               <strong>Groups</strong>

//             </div>
//             <div className="profiles-container" onClick={handleprofile}>
//               <img src={mine} alt="" />
//               <strong>Profile</strong>
//             </div>
          
//           </div>
//           <div className="right-container">
//             <div className="nav-container">
//               <img src={logo} alt="" />
//               <input
//               className="searchbox"
//                 placeholder="Find Rooms"
//                 value={query}
//                 onChange={(e) => setQuery(e.target.value)}
//                 />
//                 <button className="searchbtn" onClick={handleSearch}> Search </button>
//               <button className="create" onClick={handleOpen}>Create New Group</button>
//               <div className="logout" onClick={handleLogout}>Logout</div>
//             </div>
//             <div className="Select-container">


//               {Publics&& groups?.map(el =><Publiccard
//                group_name={el.group_name}
//                description={el.description}
//                members={el.members}
//                roomid={el._id}
               

//               />) 

//               }
//             </div>
//           </div>
//           {
//             <Modal style={{
//               position: "fixed",
//               width: "40%",
//               height: "350px",
//               marginTop: "6%",
//               marginLeft:"30%",
//               // padding: "5%",
//             }} open={open} 
//             onClose={handleClose}>
//                 <Paper style={{padding:"5%"}}>
//                   <h1>Create A New Group</h1>
//                   <TextField
//                     id="filled-basic"
//                     label="Group Name"
//                     variant="filled"
//                     value={title}
//                     onChange={(e) => setTitle(e.target.value)}
//                   />
//                   <br/><br/>
//                   <TextField
//                     id="filled-basic"
//                     label="Description"
//                     variant="filled"
//                     value={desc}
//                     onChange={(e) => setDesc(e.target.value)}
//                   />
//                   <br/><br/>
//                   <div style={{
//                     display: "flex",
//                     justifyContent:"space-around"
//                   }}>
//                       <Button variant="contained" color="primary" onClick={handleClose}>Cancel</Button>
//                       <Button variant="contained" color="primary" onClick={createGroup}>Create</Button>
//                   </div>
//                 </Paper>
//             </Modal>
//           }
              

//         </div>
//       </div>
//     </>
//   );
// }

// export {PrivateDashboard};

// const Popup = styled.div`


// `
