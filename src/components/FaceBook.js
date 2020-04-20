import React, { Component } from 'react';
import profiles from '../data/berlin.json';
import './FaceBook.css';

class FaceBook extends Component {
    render() {
        console.log(profiles);

        return (
            <ul className='FaceBook'>
                {
                    profiles.map((profile, index) => (
                        <li key={index} className='FaceBook-profile'>
                            <img src={profile.img} alt='' />
                            <div className='FaceBook-profile-data'>
                                <div><b>First name: </b>{profile.firstName}</div>
                                <div><b>Last name: </b>{profile.lastName}</div>
                                <div><b>Country: </b>{profile.country}</div>
                                <div><b>Type: </b>{profile.isStudent ? 'Student' : 'Teacher'}</div>
                            </div>
                        </li>
                    ))
                }
            </ul>
        );
    }
}

export default FaceBook;