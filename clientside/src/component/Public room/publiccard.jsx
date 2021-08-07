import React from "react";
import "./publiccard.css";
import { Link} from "react-router-dom";
import axios from "axios";
function Publiccard({ group_name, description, roomid ,members}) {

    let loginedUserId = localStorage.getItem("user")
    loginedUserId = JSON.parse(loginedUserId)
    const goToRoom = (e) => {
        console.log(loginedUserId._id,roomid)
        const payload = {
            id: loginedUserId._id.toString()
        }
        if(!roomid){
            e.preventDefault()
        }
        axios.patch(`http://localhost:1997/addmember?room=${roomid}`, payload)
        .then((res) => console.log(res.data))
    }


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
            </div>
            {
              members?.includes(loginedUserId?._id)?
                <Link onClick={(e) => goToRoom(e)} to={`/room/${roomid}`} style={{textDecoration:"none"}}> <div className="btn"> Enter</div></Link>
                :
                <Link onClick={(e) => goToRoom(e)} to={`/room/${roomid}`} style={{textDecoration:"none"}}> <div className="btn"> Join</div></Link>
            }
        {/* <Link onClick={(e) => goToRoom(e)} to={`/room/${roomid}`} style={{textDecoration:"none"}}> <div className="btn"> Join</div></Link> */}

      </div>
    </>
  );
}

export default Publiccard;
