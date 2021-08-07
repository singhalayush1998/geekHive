import React, { useEffect, useState } from "react";
import "./Publicdashboard.css";
import logo from "../../assets/logo.jpeg";
import material from "../../assets/material.png";
import discussion from "../../assets/discussion.png";
import hive from "../../assets/hivetext.jpeg";
import axios from "axios"


function PublicDashboard() {
  const [Publics, setpublic] = useState(true)
  const [privates, setprivate] = useState(false)
  const [profile, setprofile] = useState(false)
 const [groups, setGroups]= useState([])

useEffect(() => {
 
  axios.get("http://localhost:1997/newGroup")
  .then((response) =>setGroups(response.data))
  

}, [])




  const handlediscussion=()=>{ 
    setpublic(true)
    setprofile(false)
    setprivate(false)
  }
  const handlematerial=()=>{ 
    setpublic(false)
    setprofile(false)
    setprivate(true)
  }

  return (
    <>
      <div className="dashboardBody">
       
        <div className="container">

          <div className="profiles">
            <img className="logo" src={logo} alt="" />
            <div className="profiles-container" onClick={handlediscussion}>
              <img src={discussion} alt="" />
              <strong>Discussion</strong>
            </div>
            <div className="profiles-container" onClick={handlematerial}>
              <img src={material} alt="" />
              <strong>Material</strong>
            </div>
        
          </div>
          <div className="right-container">
            <div className="nav-container">
              <img src={hive} alt=""/>
             
            </div>
            <div className="Select-container">
              <div className="midContaintBox">
              <div className="midContaintBox2">
              <h1>WellCome to</h1>
              <div className="disscussiobBox">
                
              </div>

              </div>
              <div className="Members">

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
