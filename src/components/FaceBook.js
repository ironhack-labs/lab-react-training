import profiles from '../data/berlin.json'
import React, { useState } from 'react';



const FaceBook = props => {


 
  let [isBtnSelected, setBtn] = useState("");

  let arrCountries = profiles.map((elem) => {
      return elem.country
  })

 const filteredButtons = arrCountries.filter((item, index) => arrCountries.indexOf(item) === index);

let style = {}
let styleBtn= {}


const setCountry = (country) => {
setBtn(() => isBtnSelected = country)
}
return (
<>

{filteredButtons.map((profile) => {
    
    return  <button style={isBtnSelected === profile ?  {backgroundColor: "green"} : {backgroundColor: "white"} } onClick={() => setCountry(profile)}>{profile}</button>




})}
{profiles.map((profile) => {
    {isBtnSelected === profile.country ? style= {backgroundColor: "green"} : style= {backgroundColor: "white"} }
    return <div style={style}>

        <div><img src={profile.img}></img>
        </div>
        <div>
            <p>First Name: {profile.firstName}</p>
            <p>Last Name: {profile.lastName}</p>

            <p>Country: {profile.country}</p>
    {profile.isStudent === true ? <p>Type: Student</p> :  <p>Type: Teacher</p> }
        

        </div>
    </div>
})}



    </>)
    
}


export default FaceBook;