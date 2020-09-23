import React from 'react'
import profiles from '../data/berlin.json'

const Facebook = () => {

    const countriesArr = []

    profiles.forEach(el => {
        countriesArr.push(el.country)
    })

    const displayCountry = (country) => {
        const displayed = document.querySelectorAll('.display')

        if (displayed) {
            displayed.forEach(el => el.classList.remove('display'))
            document.querySelectorAll(`.${country}`).forEach(el => {el.classList.add('display')})
        } else {
            document.querySelectorAll(`.${country}`).forEach(el => {el.classList.add('display')})
        }

    }

    const uniqueCountries = [...new Set(countriesArr)].sort()

    const countriesBtns = uniqueCountries.map((country, i) =>
        <button className="col-2" key={i} onClick={() => displayCountry(country)}>{country}</button>
    )

    const renderProfiles = profiles.map((profile, i) =>
        <div className={`id-card col-11 col-sm-5 ${profile.country}`} key={i}>
            <div className='image'>
                <img src={profile.img} alt="" />
            </div>
            <div>
                <p>
                    <strong> First Name </strong>
                    {profile.firstName}
                </p>
                <p>
                    <strong> Last Name </strong>
                    {profile.lastName}
                </p>
                <p>
                    <strong> Country </strong>
                    {profile.country}
                </p>
                <p>
                    <strong> Type </strong>
                    {`${profile.isStudent ? 'Student' : 'Teacher'}`}
                </p>
            </div>
        </div>)

    const orderByFirstName = () => {
        console.log('true')
       return true
    }

    return (
        <div className="facebook-page row justify-content-around">
            {countriesBtns}
            <button onClick={() => orderByFirstName()}>Order by First Name</button>
            <div className="profiles row justify-content-around">
                {renderProfiles}
            </div>
        </div>
    )
}


export default Facebook




