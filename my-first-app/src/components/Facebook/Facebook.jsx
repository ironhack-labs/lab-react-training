import profiles from './../../assets/data/berlin.json';
import { useState } from 'react';
import './Facebook.css'

const listProfiles = profiles
const FaceBook = () => {




    const [profiles, setListProfiles] = useState(listProfiles)
    console.log(listProfiles)
    return (
        listProfiles.map(elm => {
            return (

                <div className='StudentCard'>
                    <img src={elm.img} alt={elm.firstName} />
                    <div className='info'>
                        <p>First name: {elm.firstName}</p>
                        <p>Last name: {elm.lastName}</p>
                        <p>Country: {elm.country}</p>
                        <p>Type:{elm.isStudent ? 'Student' : 'Teacher'}</p>
                    </div>
                </div>


            )
        })
    )
}
export default FaceBook