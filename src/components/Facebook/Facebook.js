import React from 'react';
import profiles from './berlin.json';
import './Facebook.css';

class Facebook extends React.Component {

    state = { 
        profiles: profiles,
        selectedProfiles: []
    }

    handleClick = e => {
        if(e.target.innerHTML !== 'All') {
            const sortedProfiles = this.state.profiles.filter(profile => profile.country === e.target.innerHTML);
        
            this.setState({
                selectedProfiles: sortedProfiles
            })
        } else {
            this.setState({
                selectedProfiles: []
            })
        }
    }

    render() {
        const newProfiles = this.state.profiles.map(profile => {
            return (
                <div style={{backgroundColor: this.state.selectedProfiles.includes(profile) ? 'lightblue' : 'white'}} key={profile.firstName} className='facebook-profile'>
                    <img src={profile.img} alt='Facebook profile' />
                    <div className='profile-text'>
                        <p><strong>First name:</strong> {profile.firstName}</p>
                        <p><strong>Last name:</strong> {profile.lastName}</p>
                        <p><strong>Country:</strong> {profile.country}</p>
                        {profile.isStudent ? <p><strong>Type:</strong> Student</p> : <p><strong>Type:</strong> Teacher</p>} 
                    </div>
                </div>
            ) 
        })

        const countryArr = [...new Set(this.state.profiles.map(profile => {
            return profile.country;
        }))];

        const countryButtons = countryArr.map(country => {
            return (
                <button onClick={this.handleClick} className='country-button' key={country}>{country}</button>
            )
        })

        return (
            <div>
                <button onClick={this.handleClick} className='country-button'>All</button>
                {countryButtons}
                {newProfiles} 
            </div>
        )
    }
}


export {Facebook};