import { useState } from "react";
import profiles from "../data/berlin.json"

function FaceBook() {

    const [countryChoice, setCountryChoice] = useState(null)

    const countries = [...new Set(profiles.map(profile => profile.country))]

    function handleClick(country) {
        setCountryChoice(country)
    }

    return (
        <>
            <div className="countryButtonDiv">
                {countries.map(country => {
                    return(
                        <button className={`${country === countryChoice ? "clicked" : ""}`} onClick={() => handleClick(country)}>{country}</button>
                    )
                })}
            </div>
            {profiles.map(profile => {

                return(
                    <div className={`idCard ${countryChoice === profile.country ? "blueCountry" : "" }`}>
                        <div className="idCardPicture">
                            <img src={profile.img} alt="" />
                        </div>
                        <div className="idCardText">
                            <p><b>First Name: </b>{profile.firstName}</p>
                            <p><b>Last Name: </b>{profile.lastName}</p>
                            <p><b>Country: </b> {profile.country}</p>
                            {profile.isStudent ? <p><b>Type: </b>Student</p> : <p><b>Type: </b>Teacher</p>}
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default FaceBook;