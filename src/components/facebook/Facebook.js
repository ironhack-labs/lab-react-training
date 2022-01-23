import React from 'react';
import data from "../../data/berlin.json";
import "./Facebook.css";

const Facebook = () => {
  // States
  // state to control the profiles to show
  const [profiles, setProfiles] = React.useState(data);

  // filter
  //const [filterByCountry, setFilterByCountry] = React.useState(false);

  // display profile info
  const [displayProfileInfo, setDisplayProfileInfo] = React.useState(false)

  // state to control the current country
  const [country, setCountry] = React.useState("");
  //const [profileCard, setProfileCard] = React.useState(false);

  const countries = data.map(item => item.country);
  // eliminate duplicates
  let uniqueCountries = [...new Set(countries)];

  // to handle coutry buttons

  const countryStyle = "selectedCountry";
  const displayInfo = "displayInfo";

  //function to filter

  // const handleBackProfile = (country) => {
  //   //console.log('country', country)
  //   //console.log(profiles)
  //   const profileFilterByCountry = profiles.filter(item=> item.country.includes(country))
  //   console.log(profileFilterByCountry)
  //   setFilterProfile(profileFilterByCountry)
  // }

  const handleCountry = ({target}) => {
    //console.log(event.target.textContent)
    setCountry(target.textContent);
    // setFilterByCountry(true) // to filter
  }

  const handleDisplayInfo = () => {
    setDisplayProfileInfo(!displayProfileInfo)
  }

  return (
    <div>
    <div className="profile-wrapper">
      <div className="country-card">
        {uniqueCountries.map(item => {
          return (
            <button 
              key={item}
              type="button"
              onClick={handleCountry}
              className={ country === item ? countryStyle : ""}
              >{item}
            </button>
          )
        })}
      </div>
      
      { 
        profiles.filter(item=> item.country.includes(country))
        .map((item, index) => {
        return (
          <div key={item.lastName} className="profile-card">
            <img 
              src={item.img} 
              width="100" 
              alt={item.lastName} 
              onClick={handleDisplayInfo}
              />
             
            <div className={displayProfileInfo ? displayInfo : "profile-info"}>
              <p><strong>First name: </strong> {item.firstName}</p>
              <p><strong>Last name: </strong> {item.lastName}</p>
              <p><strong>Country: </strong> {item.country}</p>
              <p><strong>Type: </strong> {item.isStudent ? "Student" : "Teacher"}</p>
            </div>
          </div>
          
        ) })
        }
    
    </div>
    </div>
  )
}

export default Facebook;


      // {/* {data.map((item, index) => {
      //   return (
      //     {/* <div key={item.lastName} className='countryBtn'>
      //       {console.log(item.country)}
      //     </div> */}
      //     )
      //   })} */}
    //   filterByCountry 
    //   ?
    //   profiles.filter(item=> item.country.includes(country))
    //   .map((item, index) => {
    //   return (
    //     <div key={item.lastName} className="profile-card">
    //       <img src={item.img} width="100" alt={item.lastName} />
    //       <div className="profile-info">
    //         <p><strong>First name: </strong> {item.firstName}</p>
    //         <p><strong>Last name: </strong> {item.lastName}</p>
    //         <p><strong>Country: </strong> {item.country}</p>
    //         <p><strong>Type: </strong> {item.isStudent ? "Student" : "Teacher"}</p>
    //       </div>
    //     </div>
        
    //   ) })
    //   :
    //   profiles.map((item, index) => {
    //   return (
    //     <div key={item.lastName} className="profile-card">
    //       <img src={item.img} width="100" alt={item.lastName} />
    //       <div className="profile-info">
    //         <p><strong>First name: </strong> {item.firstName}</p>
    //         <p><strong>Last name: </strong> {item.lastName}</p>
    //         <p><strong>Country: </strong> {item.country}</p>
    //         <p><strong>Type: </strong> {item.isStudent ? "Student" : "Teacher"}</p>
    //       </div>
    //     </div>
        
    //   )
    // })