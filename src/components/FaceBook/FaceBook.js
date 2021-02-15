import React from "react"
import profiles from "../../data/berlin.json"
import "./FaceBook.css"


export function FaceBook () {
    
    return (
        profiles.map(function (i) {
            if(i.isStudent) {
                return (
                    <div className="ironhacker-container">
                        <img src={i.img} alt="ironhacker"/>
                        <div>
                        <h3>First Name: {i.firstName}</h3>
                        <h3>Last Name: {i.lastName}</h3>
                        <h3>Country: {i.country}</h3>
                        <h3>Type: Student</h3>
                        </div>
                    </div>
                )
            } if (!i.isStudent) {
                return (
                    <div className="ironhacker-container">
                        <img src={i.img} alt="ironhacker"/>
                        <div>
                        <h3>First Name: {i.firstName}</h3>
                        <h3>Last Name: {i.lastName}</h3>
                        <h3>Country: {i.country}</h3>
                        <h3>Type: Teacher</h3>
                        </div>
                    </div>
                )
            }
       })
    )

}