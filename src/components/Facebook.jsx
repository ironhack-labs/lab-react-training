import React, { Component } from 'react'
import profiles from '../data/berlin.json';
import './Facebook.css'



class Facebook extends Component {
    constructor(props) {
        super(props)

        this.mapCountries = profiles.map(el => el.country)
        this.countries = Array.from(new Set(this.mapCountries));
        this.state = {
            selected: null
        }
    }



    changeColor(country) {
        this.setState(pevState => ({
            selected: country
        }))
    }
    render() {
        return (
            <>
                <div>{this.countries.map(country => {
                    return (
                        <button
                            key={country}
                            onClick={() => this.changeColor(country)}
                            style={{ backgroundColor: this.state.selected === country ? 'lightblue' : 'white' }}>
                            {country}
                        </button>
                    )
                })}</div>
                <div>{profiles.map(profile => {
                    return (
                        <div className='container-facebook'
                            key={profile.img}
                            style={{ backgroundColor: this.state.selected === profile.country ? 'lightblue' : 'white' }}>
                            <div className='profilePic'>
                                <img src={profile.img} />
                            </div>
                            <div>
                                <p><b>First name:</b> {profile.firstName}</p>
                                <p><b>Last name:</b> {profile.lastName}</p>
                                <p><b>Country</b> {profile.country}</p>
                                <p><b>Type:</b> {profile.isStudent ? 'Student' : 'Teacher'}</p>
                            </div>
                        </div>
                    )
                })}</div>
            </>
        )
    }



}

export default Facebook