import React, {useState} from 'react'
import profiles from '../data/berlin.json'
import FacebookInfo from './FacebookInfo'

const Facebook = () => {

    const countriesArr = []

    const [display, setDisplay] = useState()
    const [isBool, setIsBool] = useState(false)
    const [data, setData] = useState(profiles)
    const [search, setSearch] = useState('')

    profiles.forEach(el => {
        countriesArr.push(el.country)
    })

    const displayCountry = (country) => {
        setDisplay(country)
    }

    const displayInfo = (profile) => {
        console.log(profile)
        setIsBool(!isBool)
    }

    const uniqueCountries = [...new Set(countriesArr)].sort()

    const countriesBtns = uniqueCountries.map((country) =>
        <button className={`col-2 ${display === country ? 'active' : ''}`} key={country} onClick={() => displayCountry(country)}>{country}</button>
    )

    const orderByCountry = () => {
        const orderedByCountry = data.sort((a, b) => (a.country > b.country) ? 1 : ((b.country > a.country) ? -1 : 0))
        setData([...orderedByCountry])
    }

    const orderByFirstName = () => {
        const orderedByName = data.sort((a, b) => (a.firstName > b.firstName) ? 1 : ((b.firstName > a.firstName) ? -1 : 0))
        setData([...orderedByName])
    }

    const orderByLastName = () => {
        const orderedByName = data.sort((a, b) => (a.lastName > b.lastName) ? 1 : ((b.lastName > a.lastName) ? -1 : 0))
        setData([...orderedByName])
    }

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    const filteredData = data.filter(profile => {
        return (
            ((profile.firstName).toLowerCase() + ' ' + profile.lastName.toLowerCase() + ' ' + profile.country.toLowerCase()).indexOf(search.toLowerCase()) > -1
        )
    })

    return (
        <div className="facebook-page row justify-content-around">
            {countriesBtns}
            <div className="col-12 d-flex justify-content-center ordered">
                <button onClick={() => orderByCountry()}>Order by country</button>
                <button onClick={() => orderByFirstName()}>Order by first name</button>
                <button onClick={() => orderByLastName()}>Order by last name</button>
            </div>
            <div className="input-group input-group-lg">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroup-sizing-lg">
                        <svg viewBox="0 0 512 512"><path fill="currentColor" d="M508.5 481.6l-129-129c-2.3-2.3-5.3-3.5-8.5-3.5h-10.3C395 312 416 262.5 416 208 416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c54.5 0 104-21 141.1-55.2V371c0 3.2 1.3 6.2 3.5 8.5l129 129c4.7 4.7 12.3 4.7 17 0l9.9-9.9c4.7-4.7 4.7-12.3 0-17zM208 384c-97.3 0-176-78.7-176-176S110.7 32 208 32s176 78.7 176 176-78.7 176-176 176z"></path>
                        </svg>
                    </span>
                </div>
                <input type="text" className="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm" placeholder="Search by Name, Last Name or Country" onChange={(e) => handleChange(e)} value={search} />
            </div>
            <div className="col-12">
                <div className="profiles row justify-content-around">
                    {filteredData.map((profile) =>
                        <div className={`id-card ${isBool ? 'col-11 col-sm-5' : ''} ${display === profile.country ? 'display' : ''}`}>
                            <div className="row w-100 fb-card">
                                <button className="show-info" onClick={() => displayInfo(profile)}>{isBool ? '-' : '+'}</button>
                                <div className="image col-3">
                                    <img src={profile.img} alt={`${profile.firstName} ${profile.lastName} avatar`} />
                                </div>
                                {isBool && <FacebookInfo
                                    firstName={profile.firstName}
                                    lastName={profile.lastName}
                                    country={profile.country}
                                />}
                            </div>
                        </div>)}
                </div>
            </div>
        </div>
    )
}

export default Facebook




