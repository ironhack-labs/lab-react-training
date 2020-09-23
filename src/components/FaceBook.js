import React, { Component } from 'react'
import profiles from '../data/berlin.json';

export default class FaceBook extends Component {
    state = {
        profiles: profiles
    }

handleClick = (countryToFilter) => {
    console.log(countryToFilter, "country")
    let newProfiles = [...this.state.profiles].map(profile => {
        if (profile.country == countryToFilter){
            profile.back = "lightblue";
            return profile
        } else {
            profile.back = "white";
            return profile
        }
    })
    console.log(newProfiles)
    this.setState({
        profiles: newProfiles
    })
}

    render() {
        return (
        <div>
            {profiles.map(profile => {
                return(
                <button onClick={()=>this.handleClick(profile.country)}>{profile.country}</button>
                )
            })}
            {profiles.map(profile => {
            return (
                <div style={{width: '500px', height: '400px', border: '1px solid black', backgroundColor: `${profile.back}`}}>
                        <img src={profile.img} style={{width: '200px'}}/>
                        <p>First name:{profile.firstName}</p>
                        <p>Last name: {profile.lastName}</p>
                        <p>Country: {profile.country}</p>
                        <p>Type: {profile.isStudent ? 'Student' : 'Teacher'}</p>
                </div>
            )
        })}</div>
 )
}
}
