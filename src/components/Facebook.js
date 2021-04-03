import React from 'react';
// import '../assets/css/FacebookCard.css';
import '../assets/css/Facebook.css';
import uuid from 'react-uuid';

class Facebook extends React.Component {
    state = {
        limit: 5,
        profiles: [...this.props.profiles],
        bgColor: ''
    }

    showCountries = () => {
        this.setState({
            limit: this.state.limit + 5
        })
    }

    
    sortByLastName = () => {
        this.state.profiles
        .sort((a, b) => b - a)
        .map(profile => profile.lastName);
        
    }
    
    setBGColor = (clickedCountry) => {
        let bgColor;
        const allCountries = this.state.profiles.map(profile => profile.country);
        allCountries.map(country => {
            if (country == clickedCountry) {
                this.setState({
                    bgColor: '#a3d2e2'
                })
            }
        })
    }

    render() {
        const profiles = [...this.state.profiles];
        
        return(
            <div className='FacebookCard'>
            {/* <button className='Sort' onClick={this.sortByLastName}>Sort by last name</button> */}
            {
                profiles.slice(0, this.state.limit).map((profile) => {
                    return (
                        <div className='CountryCard' key={uuid()} onClick={() => this.setBGColor(profile.country)}>
                            {
                                profile.country
                            }
                        </div>
                        )
                    })
            }
            {
            <button className='CountryCard' onClick={this.showCountries}>...</button>
            }
            {
                this.props.profiles.map(profile => {
                    return(
                        <div className='Profile' key={uuid()} style={{backgroundColor: this.state.bgColor}}>
                            <img src={profile.img} alt='profile-img' />
                            <div className='ProfileInfo' key={uuid()}>
                                <h1>First name: <span>{profile.firstName}</span></h1>
                                <h1>Last name: <span>{profile.lastName}</span></h1>
                                <h1>Country: <span>{profile.country}</span></h1>
                                <h1>Type: <span>{profile.isStudent ? 'Student' : 'Teacher'}</span></h1>
                            </div>
                        </div>
                    )
                })
            }
        </div>
        )
    }
}

export default Facebook;