import React from 'react';
import profiles from '../data/berlin.json';

class FaceBook extends React.Component {
    state = {
        data: profiles,
        selectedCountry: null
    }

    toogleCountry = country => {
        this.setState({
            selectedCountry: country
        });
    }

    render() {
        const countries = [...new Set(this.state.data.map(profile => profile.country))].sort();
        return (
            <div className="FaceBook">
                {countries.map(country => (
                    <button key={country} onClick={() => this.toogleCountry(country)} style={{backgroundColor: this.state.selectedCountry === country ? 'lightblue' : 'white'}}>{country}</button>
                ))}
                {this.state.data.map(profile => (
                    <div className="IdCard box" key={profile.lastName} style={{backgroundColor: this.state.selectedCountry === profile.country ? 'lightblue' : 'white'}}>
                        <img src={profile.img} alt="" />
                        <div className="right">
                            <strong>First name</strong>: {profile.firstName}<br />
                            <strong>Last name</strong>: {profile.lastName}<br />
                            <strong>Country</strong>: {profile.country}<br />
                            <strong>Type</strong>: {profile.isStudent ? 'Student' : 'Teacher'}
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

export default FaceBook;