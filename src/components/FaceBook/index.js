import './index.css';
import profiles from '../../data/berlin.json';
import { useState } from 'react';



export const FaceBook = (profile) => {
  const [countryFilter, setCountryFilter] = useState();
  const [showAll, setShowAll] = useState(false);
  const [showRest, setShowRest] = useState(false);
  
  const filterByCountry = (country) =>{
    setCountryFilter(country)
    setShowAll(false)
    setShowRest(false)
    
  }
  
  const type = profile.isStudent ? 'Student' : 'Teacher';
  console.log(type);

  
  const profilesFilered  = () =>{
    
    if (showAll) {
      return profiles;
    } else if (showRest) {
      return profiles.filter(profile => profile.country !== countryFilter);
    } else if (countryFilter) {
      return profiles.filter(profile => profile.country === countryFilter);
    }
    return profiles;
  } 
  return (
    
    <div className="Facebook">
    <div className='buttons'>
    <button onClick={() => setShowAll(true)}> All</button>
    <button onClick={() => filterByCountry("Germany")}> Germany</button>
    <button onClick={() => filterByCountry("Malaysia")}>Malaysia</button>
    <button onClick={() => filterByCountry("England")}>England</button>
    <button onClick={() => filterByCountry("USA")}>USA</button>
    <button onClick={() => setShowRest(true)}> ...</button>
    </div>
    
    {profilesFilered().map((profile) => (
      <div className='card' key={profile.img}>
      <img src={profile.img} alt="ProfileImage" />
      <div className="ProfileInformation">
      <p>FirstName: {profile.firstName}</p>
      <p>LastName: {profile.lastName}</p>
      <p>Country: {profile.country}</p>
      <p>Type: {type}</p>
      </div>
      
      </div>
    ))}
    </div>
  );

};
