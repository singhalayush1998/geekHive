import React from "react";
import "./dashboard.css";

function Dashboard() {
  return (
    <>
      <div className="dashboardBody">
        <div className="dashboardNav"></div>
        <div className="container">
          <div className="profiles">
            <div className="profiles-container">
              <img src="" alt="" />
              <div> </div>
            </div>
            <div className="profiles-container">
              <img src="" alt="" />
              <div> </div>
            </div>
            <div className="profiles-container">
              <img src="" alt="" />
              <div> </div>
            </div>
            <div className="profiles-container">
              <img src="" alt="" />
              <div> </div>
            </div>
          </div>
          <div className="right-container">
            <div className="nav-container">
              <div className="material">
                <h2>Material</h2>  
              </div>
              <div className="discuss">
           
              <h2>Discussions</h2>
              </div>
            </div>
            <div className="Select-container">

            </div>
            <div className="input-container">
                
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
