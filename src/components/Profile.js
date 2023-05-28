import { useState } from "react"
import { nanoid } from "nanoid";

export function Profile({countries,img, firstName, lastName, country, isStudent}){
  const defaultCountries = ["England", "USA", "Malaysia", "Germany"];
  const [isToggled, setIsToggled] = useState(false)

  const toggleProfile = () => {
     setIsToggled(!isToggled);
  }

  return(
    <div style={{maxWidth: "500px"}}>
        <div className='border border-dark border-2 p-2 d-flex gap-2' style={{backgroundColor: country === countries || countries === 'Other' && defaultCountries.includes(country) === false  ? "lightblue" : null}}>
    <img onClick={toggleProfile} className='facebook-profile' src={img} alt=""  style={{cursor: 'pointer'}}/>


    {isToggled === true ? <div className='text-start'>
            <p className='fw-bold'>First name: <span className='fw-normal'>{firstName}</span>  </p>
            <p className='fw-bold'>Last name: <span className='fw-normal'>{lastName}</span>  </p>
            <p className='fw-bold'>Country: <span className='fw-normal'>{country}</span>  </p>
            <p className='fw-bold'>Type: {isStudent ? <span className='fw-normal'>Student</span> : <span className='fw-normal'>Teacher</span> } </p>
        </div> : null}
        </div>
    </div>
  );
}