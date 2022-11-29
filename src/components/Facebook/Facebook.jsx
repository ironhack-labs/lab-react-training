import profiles from "./../../data/berlin.json"
import { useState } from "react"
import "./Facebook.css"
const Facebook = () => {

    const [initialProfiles, setProfiles] = useState(profiles)

    const [country, setCountry] = useState("")

    const [filter, setFilter] = useState("")

    const handlEvent = e => {
        setCountry(e.target.value)
    }

    const sortByName = () => {

        const profilesCopy = [...initialProfiles]

        const sortedByName = profilesCopy.sort((a, b) => a.firstName > b.firstName ? 1 : -1)

        setProfiles(sortedByName)
    }
    const sortByLastName = () => {

        const profilesCopy = [...initialProfiles]

        const sortedByLastName = profilesCopy.sort((a, b) => a.lastName > b.lastName ? 1 : -1)

        setProfiles(sortedByLastName)
    }
    const filterByName = (event) => {
        setFilter(event.target.value)
        const filteredList = initialProfiles.filter(elm =>
            elm.firstName.toLowerCase().includes(filter) || elm.lastName.toLowerCase().includes(filter)
        )
        setProfiles(filteredList)
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
                <button onClick={sortByName}>Ordenar por Nombre</button>
                <button onClick={sortByLastName}>Ordenar por Apellido</button>
                <input type="text" name="" onChange={filterByName}></input>
            </div>

            {
                initialProfiles.map((profile, index) => {
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