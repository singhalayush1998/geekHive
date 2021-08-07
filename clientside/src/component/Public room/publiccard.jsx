import React from "react";
import "./publiccard.css";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
function Publiccard({ group_name, description, roomid }) {
  // const [added, setadded] = useState(false)

  const goToRoom = (e) => {
    if (!roomid) {
      e.preventDefault();
    }
    axios
      .patch(`http://localhost:1997/addmember?room=${roomid}`, {
        id: "610e0b421369543e5c6abecf",
      })
      .then((res) => console.log(true));
  };

  // if(added){
  //     return <Redirect push to=""/>

  // }

  let str = group_name.split("");
  str = str[0];

  return (
    <>
      <div className="card">
        <div className="profile">
          <h1>{str}</h1>
        </div>
        <div className="title">
          <h3>{group_name}</h3>
          <p>{description}</p>
        </div>
        <Link
          style={{ textDecoration: "none" }}
          onClick={(e) => goToRoom(e)}
          to={`/room/${roomid}`}
        >
          {" "}
          <div className="btn"> Join</div>
        </Link>
      </div>
    </>
  );
}

export default Publiccard;
