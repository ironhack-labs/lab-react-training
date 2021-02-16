import profiles from '../../data/berlin.json';
import React from "react";

let countries = profiles.map((profile)=> profile.country)

function Facebook(){
  const [profile, setProfile] = React.useState(profiles)
  const [showInfo, setInfo] = React.useState("none")
  const [buttons, setButtons] = React.useState(countries)
  const [showByCountry, setCountry] = React.useState("All")
  const notDuplicate = new Set(buttons)
  console.log(notDuplicate)
  const buttonsArr = ["All", ...notDuplicate]
  console.log(buttonsArr)

  
  const clickImage = () =>{
    if(showInfo === "none"){
      setInfo("block")
    } else {
      setInfo("none")
    }
    }
   
  const clickCountry = (country) =>{
    setCountry(country)
    // if(country === "All"){
    //   setCountry(profile)
    // } else {
    // const sortCountry = profile.filter(profile => profile.country === country)
    // console.log("sort",sortCountry)
    // setCountry(sortCountry)
    // }
  }
  
  
  // const type = isStudent === false ? "Teacher" : "Student"
  return (
    <>
    {
      buttonsArr.map((button) => (
        <button onClick={()=>clickCountry(button)}>{button}</button>
      ))
    }
    {
      profile.map((contact)=>(
      <article  style={{backgroundColor: contact.country === showByCountry ? "#04d9ff" : ""}} className="idCard">
        <div>
          <img onClick={clickImage} src={contact.img} alt="profile" />
        </div>
        <div style={{display:showInfo}}>
          <p>
            <span>First Name:</span> {contact.firstName}{' '}
          </p>
          <p>
            <span>Last Name:</span> {contact.lastName}
          </p>
          <p>
            <span>Country:</span> {contact.country}
          </p>
          <p>
            <span>Type:</span> {contact.isStudent ? "Student" : "Teacher"}
          </p>
        </div>
      </article>
    ))
    }
    </>
  );

}

export default Facebook