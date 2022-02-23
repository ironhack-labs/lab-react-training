import { useState } from 'react';
import profiles from '../../data/berlin.json';
import './FaceBook.css'

const FaceBook = () => {

    const colors = ['white', 'blue']

    const [profilesList, setProfilesList] = useState(profiles)
    const [bgColor, setBgColor] = useState({ background: colors[0] })


    function changeBg() {
        const filteredProfiles = profilesList.filter(profile => {
            console.log(profile.country === 'USA')
            return profile.country === 'USA'
        })

        filteredProfiles.map(profile => {
            console.log(profile)
            setBgColor({ background: colors[1] })
        })
    }

    return (
        <section>
            <button onClick={changeBg}>USA</button>
            {
                profilesList.map(profile => {
                    let type = ''
                    profile.isStudent ? type = 'Student' : type = 'Teacher'
                    return (
                        <div key={profile.firstName} className='eachProfile' style={bgColor}>
                            <img className='userImg' src={profile.img}></img>
                            <div className='profile-info'>
                                <p>First name: {profile.firstName}</p>
                                <p>Last name: {profile.lastName}</p>
                                <p>Country: {profile.country}</p>
                                <p>Type: {type}</p>
                            </div>
                        </div>
                    )
                })
            }
        </section>
    )
}

export default FaceBook