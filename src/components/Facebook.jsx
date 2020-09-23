import React, { Component } from 'react';
import profiles from '../data/berlin.json';
import FacebookCard from './FacebookCard'

const profile = profiles

class Facebook extends Component {
    render() {
        return (
            <ul>
                {profile.map(s => (<FacebookCard firstName={s.firstName} lastName={s.lastName} country={s.country} img={s.img} isStudent={s.isStudent}>
                </FacebookCard>))}
            </ul>
        );
    }
}

export default Facebook