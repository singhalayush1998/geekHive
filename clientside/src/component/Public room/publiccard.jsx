import React from 'react'
import "./publiccard.css"
import {Link} from "react-router-dom"
function Publiccard({group_name,description}) {
    return (
        <>
        <div className="card">
            <div className="profile">

            </div>
          <div className="title" >
            <h3>{group_name}</h3>
            <p>{description}</p>
            </div>
        <Link to="/dashboard"> <div className="btn"> join</div></Link>
            
        </div>
        </>
    )
}

export default Publiccard
