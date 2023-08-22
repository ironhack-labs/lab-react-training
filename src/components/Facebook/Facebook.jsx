import { useState } from 'react';
import profiles from '../../data/berlin.json';

const Facebook = () => {

    const [profile, setProfile] = useState(profiles)

    return (<>
        {profile.map(({ country }, idx) => <button key={idx}>{country}</button>)}    {
            profile.map(({ firstName, lastName, country, img, isStudent }, idx) => (
                <div key={idx} className='container'>
                    <img src={img} alt={firstName} />
                    <p><strong>First name: </strong>{firstName}</p>
                    <p><strong>Last name: </strong>{lastName}</p>
                    <p><strong>Country: </strong>{country}</p>
                    <p><strong>Type:</strong>{isStudent && 'Student'}</p>



                </div>

            ))
        } </>)
}

export default Facebook