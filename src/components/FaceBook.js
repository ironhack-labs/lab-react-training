import React from 'react';
import profiles from '../data/berlin.json';

class FaceBook extends React.Component {
    render() {
        const facebookList=profiles.map((profile)=>{
            return(
            <div className="IdCard">
            <img src={profile.img} alt={profile.firstName} />
            <div className="IdCardText">
              <p>FirstName: {profile.firstName}</p>
              <p>LastName: {profile.lastName}</p>
              <p>Country: {profile.country}</p>
              <p>Type: {profile.isStudent ? "Student" : "Teacher"}</p>
            </div>
            </div>
            )
        })
        return (
        <div>
            {facebookList}
        </div>
        );
      }
}

export default FaceBook;
