import React from "react"
import "./FaceBook.css"
import profiles from '../../data/berlin.json';

export default class FaceBook extends React.Component{
    render(){
        return(
            <div className="FaceBook">
            {profiles.map((profile, key) => (
                <div className="profileCard">
                    <div>
                        <img src={profile.img} className="profileCardImage"></img>
                    </div>
                    <div>
                        <div className="dataRow"><h2>First name:</h2> <p>{profile.firstName}</p></div>
                        <div className="dataRow"><h2>Last name:</h2> <p>{profile.lastName}</p></div>
                        <div className="dataRow"><h2>Country:</h2> <p>{profile.Country}</p></div>
                        <div className="dataRow"><h2>Type:</h2> {profile.isStudent ? <p>Student</p> : <p>Teacher</p>}</div>
                    </div>
                </div>
            )
            )}
            </div>
        )
    }
}