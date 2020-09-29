import React from "react";
import profiles from './data/berlin.json';

class FaceBook extends React.Component {
    state = {
        profileList: [...profiles],
    };
    
    render(){
        const { profileList } = this.state;
        return (
            <div>
            { profileList.map((profile, index) => {
                return (
            <div className="fb-card">
                <div className="image-fb-card">
                <img style={{ width: 200 }} src={profile.img} alt=""></img>
                </div>
                <div className="text-fb-card">
                <p>
                <strong>First Name: </strong>
                {profile.firstName}
                </p>
                <p>
                <strong>Last name: </strong>
                {profile.lastName}
                </p>
                <p>
                <strong>Country: </strong>
                {profile.country}
                </p>
                <p>
                <strong>Type: </strong>
                {profile.isStudent ? "Student" : "Teacher"}
                </p>
                </div>
            </div>)
            })}
            </div>)
}
}
  
export default FaceBook