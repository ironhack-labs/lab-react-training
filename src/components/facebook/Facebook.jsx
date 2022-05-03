import './Facebook.css'
import profiles from '../../data/berlin.json';
import { useState, useEffect } from 'react'
import IdCard from '../IdCard';



function Facebook() {

    const [profilesOriginalList, setProfilesOriginalList] = useState(profiles)
    const [profilesList, setProfilesList] = useState(profiles)
    const [countriesList, setCountriesList] = useState([])
    const [countrySelected, setCountrySelected] = useState("")
    const [profileSelectedId, setProfileSelectedId] = useState("")
    const [searchInput, setsearchInput] = useState("Aar")

    const setCountriesListFn = () => {
        const countriesArr = []
        profiles.forEach(profile => {
            if (!countriesArr.includes(profile.country)) countriesArr.push(profile.country)
        })
        setCountriesList(countriesArr)
    }

    const sortByLastName = () => {
        const profilesArr = [...profilesList]
        profilesArr.sort((a, b) => a.lastName.localeCompare(b.lastName))
        setProfilesList(profilesArr)
    }

    const searchProfile = (e) => {
        const searchedProfiles = profilesOriginalList.filter(elm => {
            let searchStr = elm.firstName + " " +elm.lastName
            searchStr = searchStr.toLowerCase()
            return searchStr.includes(e.target.value.toLowerCase())
        })
        setProfilesList(searchedProfiles)
    }

    const sortByCountry = () => {
        const profilesArr = [...profilesList]
        profilesArr.sort((a, b) => a.country.localeCompare(b.country))
        setProfilesList(profilesArr)
    }


    useEffect(() => {
        let ignore = false;

        if (!ignore) setCountriesListFn()
        return () => { ignore = true; }
    }, []);

    return (
        <div>
            <input onChange={searchProfile}
                type="text"
                id="header-search"
                placeholder="Search blog posts"
                name="s"
            />
            <button onClick={() => setCountrySelected("")}>ALL</button>
            {countriesList.map((country, idx) => {
                return (
                    <button key={idx} className={country == countrySelected ? "blueButton" : "whiteButton"} onClick={() => setCountrySelected(country)}>{country}</button>
                )
            })}
            <button onClick={sortByLastName}>Sort by last name</button>
            <button onClick={sortByCountry}>Sort by country</button>
            {profilesList.map((profile, idx) => {

                return (
                    <div key={idx} className={profile.country == countrySelected ? "idCard blueButton" : "idCard whiteButton"}>
                        <div>
                            <button onClick={() => setProfileSelectedId(idx)}><img src={profile.img} alt="" /></button>

                        </div>
                        {idx === profileSelectedId && <div>
                            <p><strong>First name: </strong>{profile.firstName}</p>
                            <p><strong>Last name: </strong>{profile.lastName}</p>
                            <p><strong>Country: </strong>{profile.country}</p>
                            <p><strong>Type: </strong>{profile.isStudent ? "Student" : "Teacher"}</p>
                        </div>}



                    </div>
                )
            })}
        </div>


    )
}


export default Facebook