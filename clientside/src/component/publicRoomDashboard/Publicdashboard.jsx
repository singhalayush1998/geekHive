import React, { useEffect, useState } from "react";
import "./Publicdashboard.css";
import logo from "../../assets/logo.jpeg";
import material from "../../assets/material.png";
import discussion from "../../assets/discussion.png";
import axios from "axios";
import { PDFReader } from "reactjs-pdf-reader";
import { Chat } from "../../Components/Discussions/Chat";
import { Link } from "react-router-dom";

function PublicDashboard() {

  const [publics, setpublic] = useState(true);
  const [privates, setprivate] = useState(false);
  const [profile, setprofile] = useState(false);
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:1997/newGroup")
      .then((response) => setGroups(response.data));
  }, []);

  const handlediscussion = () => {
    setpublic(true);
    setprofile(false);
    setprivate(false);
  };
  const handlematerial = () => {
    setpublic(false);
    setprofile(false);
    setprivate(true);
  };


  return (
    <>
      <div className="dashboardBody">
        <div className="container">
          <div className="profiles">
            {/* <img className="logo" src={logo} alt="" /> */}
                <div className="newone">
                        U
                    </div>
            <div className="profiles-container" onClick={handlediscussion}>
              <img src={discussion} alt="" />
              <strong>Discussion</strong>
            </div>
            <div className="profiles-container" onClick={handlematerial}>
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
                <div className="exit"> Exit Group</div>
                 </div>
            </div>
            <div className="Select-container">
              <div className="midContaintBox">
                <div className="midContaintBox2">
                  <div className="disscussiobBox">
                    <PDFReader
                      url={
                        "https://www.unl.edu/gradstudies/current/teaching/Syllabus_Sample.pdf"
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
