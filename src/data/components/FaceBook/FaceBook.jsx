import React from 'react';
import data from '../../berlin.json';
import '../IdCard/IdCard.css';

const allCountries = data.map(d => d.country)

export default class FaceBook extends React.Component {

    state = {
        allProfiles: [],
        countries: [...new Set(allCountries)]
    }

    componentDidMount() {
        const profileWithoutColor = data.map(d => {
            d.isBackgroundBlue = false;
            return d
        })
        this.setState({allProfiles: profileWithoutColor});
    }

    changeBackground(event) {
        const allBtns = document.querySelectorAll('.countryBtns');
        allBtns.forEach(b => b.style.backgroundColor = 'white');

        const buttonClicked = event.target;
        buttonClicked.style.backgroundColor = 'lightblue';

        const country = event.target.innerHTML;

        const allProfiles = this.state.allProfiles.map(p => {
            p.country === country ? p.isBackgroundBlue = true : p.isBackgroundBlue = false
            return p
        })

        this.setState({allProfiles })
    }

    render () {

        const profiles = this.state.allProfiles.map(profile => {
            return(
            <div className="IdCard" style={{backgroundColor: profile.isBackgroundBlue ? 'lightblue' : 'white'}}>
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

        const countryButtons = this.state.countries.map(country => {
            return(
                <button className="countryBtns" onClick={(event) => this.changeBackground(event)}>{country}</button>
            )
        })

        return (
            
            <div>
                <div style={{width: '600px', margin: '20px auto'}}>
                    {countryButtons}
                </div>
                {profiles}
            </div>
        )

    }
    
}