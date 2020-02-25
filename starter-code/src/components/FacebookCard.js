import React from 'react'
import 'bulma/css/bulma.css'
import './../index.css'
const FacebookCard = (props) =>{
    return(
        <div className="card ironCard">
          
            <div className="card-content">
                <div className="media">
                <div className="media-left">
                    <figure className="image is-128x128">
                    <img src={props.img} alt="Placeholde"/>
                    </figure>
                </div>
                <div className="media-content">
                    <p className="title is-4">{props.name}</p>
                    <p className="subtitle is-6">{props.type ? "Student" : "Teacher" }</p>
                </div>
                </div>

                <div className="content">
                   <strong> First name:</strong> {props.name} <br />
                   <strong> Last name:</strong> {props.lastName}<br/>
                   <strong> Country :</strong>  {props.country}<br />
                   <strong>  Type :</strong>  {props.type ? "Student" : "Teacher"}<br />
                <br/>
                </div>
            </div>
        </div>
    )
}

export default FacebookCard 