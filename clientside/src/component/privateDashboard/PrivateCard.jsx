import React from "react";
import "./privatecard.css";
import { Link} from "react-router-dom";
import axios from "axios";
import { Button, Modal, Paper, TextField } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import {Redirect} from "react-router-dom"
function PrivateCard({passcode, group_name, description, roomid ,members}) {

  const [open, setOpen] = React.useState(false);
  const [pass, setPass] = React.useState("")
  const [state, setState] = React.useState(false)
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const checkpassword = (ps) => {
    if(pass === ps){
        setState(true)
    }else {
        handleClose()
    }
  }
  if(state){
      return <Redirect push to={`/room/${roomid}`}/>
  }

    let loginedUserId = localStorage.getItem("user")
    loginedUserId = JSON.parse(loginedUserId)
    // const goToRoom = (e) => {
    //     console.log(loginedUserId?._id,roomid)
    //     const payload = {
    //         id: loginedUserId?._id.toString()
    //     }
    //     if(!roomid){
    //         e.preventDefault()
    //     }
    //     axios.patch(`http://localhost:1997/addmember?room=${roomid}`, payload)
    //     .then((res) => console.log(res.data))
    // }


    let str=group_name.split("")
    str=str[0]
    return (
        <>
        <div className="card">
            <div className="profile">
               <h1>{str}</h1>
            </div>
          <div className="title" >
            <h3>{group_name}</h3>
            <p>{description}</p>
            <p style={{
                color:"grey",
                fontSize:"14px"
            }}>Locked</p>
                <div className="btn" onClick={handleOpen}> Enter</div>
            </div>
                {/* // <Link onClick={(e) => goToRoom(e)} to={`/room/${roomid}`} style={{textDecoration:"none"}}> <div className="btn"> Join</div></Link> */}
        {/* <Link onClick={(e) => goToRoom(e)} to={`/room/${roomid}`} style={{textDecoration:"none"}}> <div className="btn"> Join</div></Link> */}
            
        </div>
        <Modal style={{
              position: "fixed",
              width: "40%",
              height: "350px",
              marginTop: "6%",
              marginLeft:"30%",
              // padding: "5%",
            }} open={open} 
            onClose={handleClose}>
                <Paper style={{padding:"5%"}}>
                  <h3>Enter the passcode.</h3>
                  <TextField
                    id="filled-basic"
                    label="passcode"
                    variant="filled"
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                  />
                  <br/><br/>
                  <div style={{
                    display: "flex",
                    justifyContent:"space-around"
                  }}>
                      <Button variant="contained" color="primary" onClick={handleClose}>Cancel</Button>
                      <Button variant="contained" color="primary" onClick={()=> checkpassword(passcode)}>Join</Button>
                  </div>
                </Paper>
            </Modal>
    </>
  );
}

export default PrivateCard;
