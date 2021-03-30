import React from 'react';
import '../assets/css/FacebookSimple.css';
import uuid from 'react-uuid';

class Facebook extends React.Component {
    state = {
        limit: 5
    }

    showCountries = () => {
        this.setState({
            limit: this.state.limit + 5
        })
    }

    setBGColor = (country) => {
        const profiles = [...this.props.profiles]
        profiles.map(profile => {
            if (profile.country == country) {
                let cardBGColor = 'blue';
            }
        })
    }

    render() {
        const profiles = [...this.props.profiles];
        let cardBGColor = '';

        return(
            <div className='FacebookSimple'>
            {
                profiles.slice(0, this.state.limit).map((profile, idx, profiles) => {
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
            //profiles.length
            <button className='CountryCard' onClick={this.showCountries}>...</button>
            }
            {
                this.props.profiles.map(profile => {
                    return(
                        <div className='Profile' key={uuid()} style={{backgroundColor: cardBGColor}}>
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