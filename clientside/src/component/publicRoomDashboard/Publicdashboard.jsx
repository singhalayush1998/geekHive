import React, { useEffect, useState } from "react";
import "./Publicdashboard.css";
import logo from "../../assets/logo.jpeg";
import material from "../../assets/material.png";
import Qb from "../../assets/qustionbank.png";
import M from "../../assets/mdown.png";
import Q from "../../assets/Qdown.png";
import axios from "axios";
import { PDFReader } from "reactjs-pdf-reader";
import { Chat } from "../../Components/Discussions/Chat";
import { Link } from "react-router-dom";
import { Redirect, useHistory, useParams } from "react-router";

function PublicDashboard() {
  const [Notes, setNotes] = useState(true);
  const [questions, setQuestions] = useState(false);
  // const [profile, setprofile] = useState(false);
  const [groupData, setGroupsData] = useState([]);
  const [afterExit, setafterExitData] = useState([]);

  let loginedUserId = JSON.parse(localStorage.getItem("user"));
  // loginedUserId = JSON.parse()

  const { id } = useParams();
  const history = useHistory();
  useEffect(() => {
    axios
      .get(`http://localhost:1997/newGroup/${id}`)
      .then((res) => setGroupsData(res.data.ind));
  }, [id]);

  const handlequestions = () => {
    setQuestions(false);
    setNotes(true);
  };
  const handlenotes = () => {
    setQuestions(true);
    setNotes(false);
  };
  // if(groupData.){
  //   return <Redirect push to="/login" />
  // }

  // if(!loginedUserId){
  //   return <Redirect push to="/login" />
  // }

  const handleExitGroup = () => {
    let payload = {
      id: loginedUserId?._id,
    };
    axios
      .patch(`http://localhost:1997/removemember/${id}`, payload)
      .then((res) => history.push("/dashboard"));
  };

  return (
    <>
      <div className="dashboardBody">
        <div className="container">
          <div className="profiles">
            {/* <img className="logo" src={logo} alt="" /> */}
            <div className="newone">U</div>
            <div onClick={handlequestions} className="profiles-container">
              <img src={material} alt="" />
              <strong>Material</strong>
            </div>
            <div onClick={handlenotes} className="profiles-container">
              <img src={Qb} alt="" />
              <strong>Questions </strong>
              <strong> Bank</strong>
            </div>
            <a
              target="_blank"
              style={{ textDecoration: "none" }}
              href="http://kretschmer.cc/pdf/introduction_1.pdf"
            >
            <div className="profiles-container">
              <img src={Q} alt="" />
              <strong>Download</strong>
              <strong>Material</strong>
            </div>
            </a>
            <a
    
              target="_blank"
              style={{ textDecoration: "none" }}
              href= "https://mu.ac.in/wp-content/uploads/2020/09/sample-questions-MCQS-2020-GROUP-ii-business-law.pdf"
            >
             
              <div className="profiles-container">
                <img src={M} alt="" />
                <strong>Download</strong>
                <strong>Questions </strong>
                <strong> Bank </strong>
              </div>
            </a>
          </div>
          <div className="right-container">
            <div className="nav-container">
                <div className="grps">
                <img src={logo} alt="" />
                <div>
                  <h2>{groupData?.group_name}</h2>
                  <p>{groupData?.description}</p>
                  </div>
                  </div>
              <div className="remove">
                <Link style={{ textDecoration: "none" }} to="/dashboard">
                  {" "}
                  <div className="leave"> 🤫 Leave Quitely</div>
                </Link>
                <div className="exit" onClick={handleExitGroup}>
                  {" "}
                  Exit Group
                </div>
              </div>
            </div>
            <div className="Select-container">
              <div className="midContaintBox">
                <div className="midContaintBox2">
                  <div className="disscussiobBox">
                    {Notes && (
                      <PDFReader
                        url={"http://kretschmer.cc/pdf/introduction_1.pdf"}
                        scale={1}
                        showAllPage={true}
                        width={400}
                      />
                    )}
                    {questions && (
                      <PDFReader
                        url={
                          "https://mu.ac.in/wp-content/uploads/2020/09/sample-questions-MCQS-2020-GROUP-ii-business-law.pdf"
                        }
                        scale={1}
                        showAllPage={true}
                        width={400}
                      />
                    )}
                  </div>
                </div>
                <div className="Members">
                  <Chat />
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
