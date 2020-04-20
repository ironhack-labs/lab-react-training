import React from "react";
import profiles from '../../data/berlin.json';
import BoxFaceBook from '../BoxFaceBook';
import "./style.css";

const FaceBook = () => {
  console.log(profiles)


    console.log(profiles[1].firstName)
    let buttons = [];

    for(let a = 0; a <= profiles.length; a++){
      //console.log(profiles[a].firstName.toString())
      buttons.push(profiles[a]);
      console.log(profiles[0].firstName);
     // buttons.push(profiles[pos].firstName)
    }

    console.log(buttons)

    return (
        <div>
            {profiles.map((profile,index) => {
              return (
                <div key={index}>
                    <BoxFaceBook fname={profile.firstName} lname={profile.lastName} country={profile.country}
                    type={profile.isStudent} img={profile.img}/>
                </div> 
              )
            })}
        </div>
    );
  };
  
  export default FaceBook;