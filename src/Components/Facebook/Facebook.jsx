import React from "react"
import profilesJSON from '../../data/berlin.json'
import './Facebook.css'

class Facebook extends React.Component {
    state = {
        profiles: profilesJSON,
        isStudent: true
    }



    render() {
        return(
            <div className="Facebook">
                {this.state.profiles.map((profile) => {
                    return (
                    <div key={profile.firstName} className="FacebookBox" > 
                        <img src={profile.img}/>
                        <div>
                        <p><b>First name: </b>{profile.firstName}</p>
                        <p><b>Last name: </b>{profile.lastName}</p>
                        <p><b>Country: </b>{profile.country}</p>
                        <p><b>Type: </b>{profile.isStudent ? "Student" : "Teacher"}</p>
                        </div>
                    </div>
                    )
                })}
            </div>
        )
    }
}

export default Facebook