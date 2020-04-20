import React, { Component } from 'react';
import profiles from '../data/berlin.json';
import './FaceBook.css';

class FaceBook extends Component {
    state = {
        countrySelected: ''
    }

    getCountriesArray = () => {
        const countriesArray = ['All'];

        for (let i = 0; i < profiles.length; i++) {
            if (profiles[i].country === 'Catalonia') {
                profiles[i].country = 'Spain';
            }

            if (!countriesArray.includes(profiles[i].country)) {
                countriesArray.push(profiles[i].country);
            }
        }

        return countriesArray.sort();
    };
    
    selectProfiles = (country) => {
        console.log(country);

        this.setState({
            countrySelected: country
        });
    }

    render() {
        const arrayButtons = this.getCountriesArray();

        return (
            <div className='FaceBook'>
                <div className='FaceBook-country-buttons'>
                    {
                        arrayButtons.map((button, index) => (
                            <button style={this.state.countrySelected === button ? {backgroundColor: '#A3D2E2'} : {}} key={index} className='FaceBook-country-button' onClick={() => {this.selectProfiles(button)}}>{button}</button>
                        ))
                    }
                </div>
                <ul className='FaceBook-list'>
                    {
                        profiles.map((profile, index) => (                
                            <li key={index} className='FaceBook-profile' style={this.state.countrySelected === profile.country ? {backgroundColor: '#A3D2E2'} : {}} >
                                <img src={profile.img} alt='' />                                
                                <div className='FaceBook-profile-data' >
                                    <div><b>First name: </b>{profile.firstName}</div>
                                    <div><b>Last name: </b>{profile.lastName}</div>
                                    <div><b>Country: </b>{profile.country}</div>
                                    <div><b>Type: </b>{profile.isStudent ? 'Student' : 'Teacher'}</div>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}

export default FaceBook;