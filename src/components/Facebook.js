import profilesJSON from './../data/berlin.json'
import { useState } from 'react'

function Facebook(){

    const [profiles, setProfiles] = useState(profilesJSON.map(profile => {
        profile.selected = false
        return profile
    }))

    const handleAll = () => {
        setProfiles(profiles => {
            const profilesCopy = profiles.map(profile => {
                profile.selected = true
                return profile 
            })
            return profilesCopy
        })
    }

    const setCountry = (country) =>
    {
        setProfiles(profiles => {
            const profilesCopy = profiles.map(profile => {
                if (profile.country == country)
                profile.selected = true
                else
                profile.selected = false
                return profile 
            })
            return profilesCopy
        })
    }

    const setRest = () =>
    {
        setProfiles(profiles => {
            const profilesCopy = profiles.map(profile => {
                if (profile.country != 'England'
                && profile.country != 'USA'
                && profile.country != 'Malaysia'
                && profile.country != 'Germany')
                profile.selected = true
                else
                profile.selected = false
                return profile 
            })
            return profilesCopy
        })
    }

    return(
        <div>
            <div>
                <button onClick={handleAll}> All </button>
                <button onClick={() => setCountry('England')}> England </button>
                <button onClick={() => setCountry('USA')}> USA </button>
                <button onClick={() => setCountry('Malaysia')}> Malaysia </button>
                <button onClick={() => setCountry('Germany')}> Germany </button>
                <button onClick={setRest}> ... </button>
            </div>

            {profiles.map((profile, index) => (
                    <div
                    style={{
                        backgroundColor: profile.selected ? "lightblue" : "white"
                    }}
                    key={index} className='d-flex'>
                        <div>
                            <img style={{width: "150px"}} src={profile.img} alt='profile picture'/>     
                        </div>
                        <div>
                            <p><strong>First name:</strong> {profile.firstName}</p>
                            <p><strong>Last name:</strong> {profile.lastName}</p>
                            <p><strong>Country:</strong> {profile.country}</p>
                            <p><strong>Type:</strong> 
                                {profile.isStudent ? 'Student' : 'Teacher'}
                            </p>
                        </div>
                    </div>
                )
            )}
        </div>
    )
}

export default Facebook