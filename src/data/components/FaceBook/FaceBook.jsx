import React from 'react';
import data from '../../berlin.json';
import '../IdCard/IdCard.css';


export default class FaceBook extends React.Component {

    state = {
        allProfiles: []
    }

    componentDidMount() {
        const profileWithoutColor = data.map(d => {
            d['isBackgroundBlue'] = false
        })
        console.log(profileWithoutColor);
    }
  render () {

    const profiles = data.map(profile => {
        return(
        <div className="IdCard">
            <div className="IdCard-left">
                <img style={{width: '200px'}} src={`${profile.img}`} alt="Profile pic"/>
            </div>
            <div className="IdCard-right">
                <p><b>Last name:</b><span> {profile.lastName}</span></p>
                <p><b>First name:</b><span> {profile.firstName}</span></p>
                <p><b>Country:</b><span> {profile.country}</span></p>
                <p><b>Type:</b><span> {profile.isStudent ? 'Student' : 'Teacher'}</span></p>
            </div>
        </div>
        )
    })

    const countryButtons = data.map(profile => {
        return(
            <button>{profile.country}</button>
        )
    })

    return (
        
        <div>
            {countryButtons}
            {profiles}
        </div>
    )

  }
    
}