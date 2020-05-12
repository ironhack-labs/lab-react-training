import React from "react";
import profiles from "../data/berlin.json";

export default function FaceBook(props) {
    
    return (
        <div>
                {profiles.map(card => (
                    <div key={card.firstName+card.lastName} style={{border: "2px solid black", margin:"20px", padding:"6px"}} >
                        <div style={{float: "left"}}>
                            <img src={card.img} alt={card.firstName} style={{width:"200px"}} />
                        </div>
                        <div style={{float: "left", fontSize: "xx-large", margin: "0px 10px"}}>
                            <div><span style={{fontWeight: "bold"}}>First name: </span>{card.firstName}</div>
                            <div><span style={{fontWeight: "bold"}}>Last name: </span>{card.lastName}</div>
                            <div><span style={{fontWeight: "bold"}}>Country: </span>{card.country}</div>
                            <div><span style={{fontWeight: "bold"}}>Type: </span>{card.isStudent ? "Student":"Teacher"}</div>
                        </div>
                        <div style={{clear: "both"}} />
                    </div>
                ))}
        </div>
    )
}