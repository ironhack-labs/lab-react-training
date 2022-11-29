import profiles from "./../../data/berlin.json"
import { useState } from "react"
import "./Facebook.css"
const Facebook = () => {

    const [country, setCountry] = useState("")

    const handlEvent = e => {
        setCountry(e.target.value)
    }

    return (

        <div className="facebookContainer">
            <div className="buttonsContainer">
                <button onClick={handlEvent} value="All">All</button>
                <button onClick={handlEvent} value="England">England</button>
                <button onClick={handlEvent} value="Malaysia">Malaysia</button>
                <button onClick={handlEvent} value="Germany">Germany</button>
                <button onClick={handlEvent} value="Nigeria">Nigeria</button>
                <button onClick={handlEvent} value="Sweden">Sweden</button>
            </div>
            {
                profiles.map((profile, index) => {
                    return (
                        <div key={index} className="profileCard"
                            style={country === "All" || country === profile.country ? { backgroundColor: '#A3D2E2' } : {}}
                        >
                            <img src={profile.img}></img>
                            <div className="textContainer">
                                <span><strong>First Name:</strong>{profile.firstName}</span>
                                <span><strong>Last Name:</strong>{profile.lastName}</span>
                                <span><strong>Country:</strong>{profile.country}</span>
                                {profile.isStudent ? <span><strong>Type: </strong> Student</span> : <span><strong>Type: </strong> Teacher</span>}
                            </div>
                        </div>
                    )
                })
            }
        </div>)

}
export default Facebook