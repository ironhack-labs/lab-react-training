import React from "react";
import profiles from '../../data/berlin.json';
import BoxFaceBook from '../BoxFaceBook';
import ButtonCountry from '../ButtonCountry';
import "./style.css";

const state = {
  country: ''
}

const globalStateContext = React.createContext(state);

const selectCuntry = (countryValue) => {
  React.useContext(globalStateContext.country = countryValue.children[1]);
}

const FaceBook = () => {

    let buttons = [];
    const countrys = [];
    const myObj = [];

    buttons = profiles.map((profile, index) => {
              return profile.country;
    })

    buttons.forEach(el => !(el in myObj) && (myObj[el] = true) && countrys.push(el))
    const { selected } = React.useContext(globalStateContext);
    return (
        <div>
            {countrys.map((country, index)=>{
              return <ButtonCountry kee={index} selectCuntry={selectCuntry}> {country} </ButtonCountry>
            })}
            {profiles.map((profile,index) => {
              return (
                <div key={index}>
                    <BoxFaceBook selected={selected} fname={profile.firstName} lname={profile.lastName} country={profile.country}
                    type={profile.isStudent} img={profile.img}/>
                </div> 
              )
            })}
        </div>
    );
  };
  
  export default FaceBook;