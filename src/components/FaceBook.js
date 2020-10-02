import React, { Component } from 'react'
import IdCard from './IdCard'
import profiles from '../data/berlin.json'

export default class FaceBook extends Component {
    render() {
        return (
            <div>
                {profiles.map((profile, index) =>
                    <IdCard
                        key={profile.firstName + index}
                        lastName={profile.lastName}
                        firstName={profile.firstName}
                        country={profile.country}
                        type={profile.isStudent}
                        picture={profile.img}
                    />
                )}
            </div>
        )
    }
}
