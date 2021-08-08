import React, { useEffect, useState } from "react";
import "./Publicdashboard.css";
import logo from "../../assets/logo.jpeg";
import material from "../../assets/material.png";
import discussion from "../../assets/discussion.png";
import axios from "axios";
import { PDFReader } from "reactjs-pdf-reader";
import { Chat } from "../../Components/Discussions/Chat";
import { Link } from "react-router-dom";
import { Redirect, useHistory, useParams } from "react-router";

function PublicDashboard() {
  
  // const [publics, setpublic] = useState(true);
  // const [privates, setprivate] = useState(false);
  // const [profile, setprofile] = useState(false);
  const [groupData, setGroupsData] = useState([]);
  const [afterExit, setafterExitData] = useState([]);

  let loginedUserId = JSON.parse(localStorage.getItem("user"))
  // loginedUserId = JSON.parse()
  
  const {id} = useParams()
  const history = useHistory()  
  useEffect(() => {
    axios
      .get(`http://localhost:1997/newGroup/${id}`)
      .then((res) => setGroupsData(res.data))
  }, [id]);

  // const handlediscussion = () => {
  //   setpublic(true);
  //   setprofile(false);
  //   setprivate(false);
  // };
  // const handlematerial = () => {
  //   setpublic(false);
  //   setprofile(false);
  //   setprivate(true);
  // };
  // if(groupData.){
  //   return <Redirect push to="/login" />
  // }
  
  
 
  // if(!loginedUserId){
  //   return <Redirect push to="/login" />
  // }

  const handleExitGroup=()=>{
    let payload = {
      id:loginedUserId?._id
    }
    axios
      .patch(`http://localhost:1997/removemember/${id}`,payload)
      .then((res) =>history.push("/dashboard"));
  }



  return (
    <>
      <div className="dashboardBody">
        <div className="container">
          <div className="profiles">
            {/* <img className="logo" src={logo} alt="" /> */}
                <div className="newone">
                        U
                    </div>
            <div className="profiles-container" >

              <img src={discussion} alt="" />
              <strong>Discussion</strong>
            </div>
            <div className="profiles-container">
              <img src={material} alt="" />
              <strong>Material</strong>
            </div>
            <Link to="/webcam">
            <div className="profiles-container">
                <strong>Join Web</strong>
            </div>
            </Link>
          </div>
          <div className="right-container">
            <div className="nav-container">
              <img src={logo} alt="" />
              <div className="remove">
                <Link style={{textDecoration: "none"}} to="/dashboard">  <div className="leave"> 🤫 Leave Quitely</div></Link> 
                <div className="exit" onClick={handleExitGroup}> Exit Group</div>
              </div>
            </div>
            <div className="Select-container">
              <div className="midContaintBox">
                <div className="midContaintBox2">
                  <div className="disscussiobBox">
                    <PDFReader
                      url={
                        groupData?.material[0]
                      }
                      scale={1}
                      showAllPage={true}
                      width={400}
                    />
                  </div>
                </div>
                <div className="Members">
                  <Chat/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PublicDashboard;
