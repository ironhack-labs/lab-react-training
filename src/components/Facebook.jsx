import React from 'react'
import profiles from '../data/berlin.json'

const Facebook = () => {

    const countriesArr = []

    profiles.forEach(el => {
        countriesArr.push(el.country)
    })

    const uniqueCountries = [...new Set(countriesArr)]
    const countriesBtns = uniqueCountries.map((country, i) => 
        <button className="col-2" key={i}>{country}</button>
    )

    const renderProfiles = profiles.map((profile, i) =>
        <div className='id-card col-11 col-sm-5' key={i}>
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

    return (
        <div className="facebook-page row justify-content-around">
            {countriesBtns}
            <div className="profiles row justify-content-around">
                {renderProfiles}
            </div>
        </div>
    )
}


export default Facebook




