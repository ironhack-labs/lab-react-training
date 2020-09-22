import React, { Component } from 'react'
import profiles from '../data/berlin.json';
import FacebookProfile from './FacebookProfile'
import './Facebook.css'



class Facebook extends Component {
    constructor(props) {
        super(props)

        this.mapCountries = profiles.map(el => el.country)
        this.countries = Array.from(new Set(this.mapCountries));
        this.state = {
            selected: null,
            imgClick: false
        }
    }

    changeColor(country) {
        this.setState(prevState => ({
            selected: country
        }))
    }
    handleImgClick() {
        this.setState(currentState => ({
            imgClick: !currentState.imgClick
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
                            <div className='profilePic' onClick={() => this.handleImgClick()}>
                                <img src={profile.img} />
                            </div>
                            {this.state.imgClick && <FacebookProfile
                                firstName={profile.firstName}
                                lastName={profile.lastName}
                                country={profile.country}
                            />}
                            
                        </div>
                    )
                })}</div>
            </>
        )
    }



}

export default Facebook