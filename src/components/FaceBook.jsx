import profiles from "../data/berlin.json"
import {useState} from "react";
import FaceBookCard from "./FaceBookCard";

function FaceBook() {
  const [bgColor, setBgColor] = useState("#ff0000");
  
  // const uniqueCountries = profiles.filter((item, index) => {
  //   return profiles.findIndex(obj => obj.country === item.country) === index;
  // }).map(item => item.country);


    // const countryPicker = (country) => {
    //   if (country === profiles[i].country) {
    //     return setBgColor("#ff0000")
    //   }};
  

    return (
      <>
        <p>Hi</p>
        {/* {uniqueCountries.map(country => {return <button onClick={countryPicker(country)}> {country}</button>})} */}
        {/* {profiles.map (elem => {return <FaceBookCard profile={elem} bgColor={bgColor}/>})} */}
      </>)
}

export default FaceBook