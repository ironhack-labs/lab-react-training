import React from 'react';
import '../assets/css/FacebookSimple.css'

const FacebookSimple = (props) => {
    console.log(props)
    return(
        <div className='FacebookSimple'>
            {
                props.profiles.map(profile => {
                    return(
                        <div className='Profile'>
                            <img src={profile.img} alt='profile-img' />
                            <div className='ProfileInfo'>
                                <h1>First name: <span>{profile.firstName}</span></h1>
                                <h1>Last name: <span>{profile.lastName}</span></h1>
                                <h1>Country: <span>{profile.country}</span></h1>
                                <h1>Type: <span>{profile.isStudent ? 'Student' : 'Teacher'}</span></h1>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default FacebookSimple;