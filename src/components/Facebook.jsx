import React, {useState} from 'react'
import profiles from '../data/berlin.json'
import FacebookInfo from './FacebookInfo'

const Facebook = () => {

    const countriesArr = []

    const [display, setDisplay] = useState()
    const [isBool, setIsBool] = useState(false)

    profiles.forEach(el => {
        countriesArr.push(el.country)
    })

    const displayCountry = (country) => {
        setDisplay(country)
    }

    const displayInfo = (e) => {
        console.log(e.currentTarget)
        setIsBool(!isBool)
    }

    const uniqueCountries = [...new Set(countriesArr)].sort()

    const countriesBtns = uniqueCountries.map((country) =>
        <button className={`col-2 ${display === country ? 'active' : ''}`} key={country} onClick={() => displayCountry(country)}>{country}</button>
    )

    const renderProfiles = profiles.map((profile,i) =>
        <div className={`id-card ${isBool ? 'col-11 col-sm-5' : ''} ${display === profile.country ? 'display' : ''}`} key={i} onClick={(e) => displayInfo(e)}>
            <div className={`image ${isBool ? 'mr-5' : 'mr-0'}`}>
                <img src={profile.img} alt={`${profile.firstName} ${profile.lastName} avatar`} />
                <button className="show-info">{isBool ? '-' : '+'}</button>
            </div>
            {isBool && <FacebookInfo
                firstName={profile.firstName}
                lastName={profile.lastName}
                country={profile.country}
            />}
        </div>)

    // const orderByFirstName = () => {
    //     console.log('true')
    //     return true
    // }

    return (
        <div className="facebook-page row justify-content-around">
            {countriesBtns}
            {/* <button onClick={() => orderByFirstName()}>Order by First Name</button> */}
            <div className="profiles row justify-content-around">
                {renderProfiles}
            </div>
        </div>
    )
}

export default Facebook




