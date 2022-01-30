import React from 'react';

const FaceBook = ({profiles}) => {
  return (
  <div>
    {profiles.map((profile)=>{
        return(
            <div>
                <img style={{width:"60px"}} src={profile.img}/>
                <p>First Name: {profile.firstName}</p>
                <p>Last Name: {profile.lastName}</p>
                <p>Country: {profile.country}</p>
                <p>Type: {profile.isStudent? "Student":"Teacher"}</p>
            </div>
        )
    })}
  </div>
    )
};

export default FaceBook;
