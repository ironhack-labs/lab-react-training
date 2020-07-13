import profiles from '../data/berlin.json';
import React, { Component } from 'react'
import IdCard from './IdCard';

const profilesImported = JSON.parse(JSON.stringify(profiles))
const newProfiles = [...profilesImported]

const faceBookProfiles = newProfiles.map((profile, index) => {
    const isAStudent = profile.isStudent
    return (
        <IdCard key={index}
                picture={profile.img}
                firstName={profile.firstName} 
                lastName={profile.lastName}
                country={profile.country}
                type={isAStudent ? "Student" : "Teacher"}    
         />
    )
})

export class FaceBook extends Component {
    render() {
        return (
            <div>
                {faceBookProfiles}
            </div>
        )
    }
}

export default FaceBook
