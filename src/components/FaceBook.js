import React from "react";
import './FaceBook.css';
import profiles from '../data/berlin.json';

function FaceBook() {
    const profile = "profile"

    return (

        <div className="FaceBook">
            {profiles.map((elem, idx) => {
                return (
                    <div className="Prof" key={elem.firstName}>
                        <img src={elem.img} alt="profile pic" />
                        <p>Firstname: {elem.firstName}</p>
                        <p>Lastname: {elem.lastName}</p>
                        <p>Country: {elem.country}</p>
                        <p>Type: {elem.type}</p>
                    </div>
                )
            }

            )

            }
        </div>
    )
        }


    export default FaceBook