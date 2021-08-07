import React, { useEffect, useState } from "react";
import "./dashboard.css";
import logo from "../../assets/logo.jpeg";
import Public from "../../assets/public.png";
import Private from "../../assets/private.png";
import mine from "../../assets/mygroups.png";
import hive from "../../assets/hivetext.jpeg";
import Publiccard from "../Public room/publiccard";
import axios from "axios"
import { Redirect, useHistory } from "react-router";


function Dashboard() {
  const [Publics, setpublic] = useState(true)
  const [privates, setprivate] = useState(false)
  const [profile, setprofile] = useState(false)
  const [groups, setGroups]= useState([])
  const loginedUserId = JSON.parse(localStorage.getItem("user"))
  const history = useHistory()


  useEffect(() => {
    axios.get("http://localhost:1997/newGroup")
    .then((response) =>setGroups(response.data))
  }, [])

  const handlepublic=()=>{ 
    setpublic(true)
    setprofile(false)
    setprivate(false)
  }
  const handleprivate=()=>{ 
    setpublic(false)
    setprofile(false)
    setprivate(true)
    
  }
  const handleprofile=()=>{ 
    setpublic(false)
    setprofile(true)
    setprivate(false)
  }
  const handleLogout = ()=>{
    localStorage.clear()
    history.push("/")

  }
    // loginedUserId = JSON.parse(loginedUserId)
  useEffect(()=>{
    console.log(loginedUserId)
    if(!loginedUserId){
      history.push("/login")
    }
  },[loginedUserId])

  return (
    <>
      <div className="dashboardBody">
       
        <div className="container">

          <div className="profiles">
            <img className="logo" src={logo} alt="" />
            <div className="profiles-container" onClick={handlepublic}>
              <img src={Public} alt="" />
              <strong>Public Groups</strong>
            </div>
            <div className="profiles-container" onClick={handleprivate}>
              <img src={Private} alt="" />
              <strong>Private Groups</strong>
            </div>
            <div className="profiles-container" onClick={handleprofile}>
              <img src={mine} alt="" />
              <strong>Profile</strong>
            </div>
          
          </div>
          <div className="right-container">
            <div className="nav-container">
              <img src={hive} alt="" />
              <div className="logout" onClick={handleLogout}>Logout</div>
            </div>
            <div className="Select-container">


              {Publics&& groups?.map(el =><Publiccard
               group_name={el.group_name}
               description={el.description}
               members={el.members}
               roomid={el._id}
               

              />) 

              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
