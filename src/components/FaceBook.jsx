import profiles from '../data/berlin.json';
import { useState } from 'react';
import FaceBookCard from './FaceBookCard';
import "../App.css"

function FaceBook() {
  const bgColor = "lightblue";
  const [pickedCountry, setPickedCountry] = useState("");

  const uniqueCountries = profiles.filter((item, index) => {
    return profiles.findIndex(obj => obj.country === item.country) === index;
  }).map(item => item.country);

  const countryPicker = (country)=>{
    setPickedCountry(country);
  }

  return (
    <>
      {/* <button onClick={(()=>{countryPicker("England")})}>England</button> */}
      {uniqueCountries
        .map(country => {return <button onClick={(() => {countryPicker(country)})}>{country}</button>})}
      {profiles
        .map((elem) => {
        return <FaceBookCard profile={elem} key={elem.firstName} pickedCountry={pickedCountry} bgColor={bgColor}/>;
      })}
    </>
  );
}

export default FaceBook;