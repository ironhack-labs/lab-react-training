import profiles from '../data/berlin.json';
import {useState} from 'react';
function FaceBook() {

    const  [currentProfiles, setCurrentProfiles] = useState(profiles.map(profile => {
      profile.isSelected = false;
      return profile;
    }));

    console.log("currentProfiles", currentProfiles);

    const handleAll = () => {
      setCurrentProfiles(profiles => {
        
        return [...profiles].map(profile => {
          profile.isSelected = true;
          return profile;
        })
      });
    }

    const handleCountry = (country) => {
      setCurrentProfiles(profiles=>{

        return [...profiles].map(profile => {
          if (profile.country === country) {
            profile.isSelected = true;
          } else {
            profile.isSelected = false;
          }
          return profile;
        })
      });
    }


    const handleRest = () => {
      setCurrentProfiles(profiles=>{
        return [...profiles].map(profile => {
          if (profile.country !== 'Germany' && profile.country !== 'USA' && profile.country !== 'England' && profile.country !== 'Malaysia') {
            profile.isSelected = true;
          } else {
            profile.isSelected = false;
          }
          return profile;
        })
      });
    }

  return (
    <div>
        <div>
          <button onClick={handleAll}>All</button>
          <button onClick={()=>handleCountry("England")}>England</button>
          <button onClick={()=>handleCountry("USA")}>USA</button>
          <button onClick={()=>handleCountry("Malaysia")}>Malaysia</button>
          <button onClick={()=>handleCountry("Germany")}>Germany</button>
          <button onClick={handleRest}>...</button>
        </div>
        {currentProfiles.map((profile, index) => (// for all map function we should have a return if we use {}, but if we use () we don't need to have a return
            <div 
            className="profile" 
            style={{
              backgroundColor: profile.isSelected ? "lightblue": "white"
              }} 
            key={index}>
                <img src={profile.img} alt="profile-pic"/>
                <div className="profile-info">
                    <p><strong>First Name:</strong> {profile.firstName}</p>
                    <p><strong>Last Name:</strong> {profile.lastName} </p>
                    <p><strong>Country: </strong>{profile.country}</p>
                    <p><strong>Type: </strong>{profile.isStudent ? 'Student': 'Teacher'}</p>
                </div>
            </div>
        ))
        }
    </div>
  );
}

export default FaceBook;

