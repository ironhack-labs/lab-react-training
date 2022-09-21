import './Facebook.css'
import IdCard from '../IdCards/IdCards';
import { useState } from 'react';
import profiles from '../../data/berlin.json'


console.log(profiles)


const FaceBook = () => {

    return (
        profiles.map(profile => {
            return (
                <div className="IdCard">
                    <div className="IdCard-img">
                        <img src={profile.img} alt="perfil-image" />
                    </div>
                    <div className='IdCard-text'>
                        <p><b>First name: </b>{profile.firstName}</p>
                        <p><b>Last name: </b>{profile.lastName}</p>
                        <p><b>Country: </b>{profile.country}</p>
                        {profile.isStudent === false ? <p><b>Type: </b>Teacher</p> : <p><b>Type: </b>Student</p>}
                    </div>
                </div>
            )
        })

    )
}

export default FaceBook