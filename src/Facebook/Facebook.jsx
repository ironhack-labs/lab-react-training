import './Facebook.css'
import profiles from '../data/berlin.json';
import { useState } from 'react'


function Facebook() {


    const [profilesList, setProfilesList] = useState(profiles)

    return (
        profilesList.map((profile, idx) => {

            <article className='facebook-profile' key={idx}>
                <img src={profile.img} alt={profile.firstName} />
                <div>
                    <h3>First Name: {profile.firstName}</h3>
                    <h3>Last Name: {profile.lastName}</h3>
                    <h3>Country: {profile.country}</h3>
                    <h3>{profile.isStudent ? <p> Type: Student </p> : <p> Type: TA </p>}</h3>
                </div>
            </article>

        }))
}

export default Facebook
