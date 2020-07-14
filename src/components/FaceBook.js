import React, { Component } from 'react'
import profiles from '../data/berlin.json';


class FaceBook extends Component {
    constructor(props){
        super(props)
        this.state = {
            profiles: profiles,
            country: 'All'
        }
    }
    FaceBookMember = () => {
        const newProfiles = [...this.state.profiles]
        let cssStyle ='white'
        return newProfiles.map(profile => {
            if (this.state.country === profile.country) {
                cssStyle ='blue'
            }else{
                cssStyle ='white'
            }
            let type='Teacher'
            if(profile.isStudent){
                type='Student'
            }
            return (
                <div className='container' style={{background: cssStyle}}>
                        <div>
                            <img src={profile.img} alt={profile.lastName}/>
                        </div>
                        <div className='idcard-text'>
                        <p><span><b>First Name: </b></span>{profile.firstName}</p>
                        <p><span><b>Last Name: </b></span>{profile.lastName}</p>
                        <p><span><b>Country: </b></span>{profile.country}</p>
                        <p><span><b>Type: </b></span>{type}</p>
                    </div>
                </div>
            )
        })
    }
    selectedCountry = (name) => {
        this.setState(({country}) => ({country:name}))
    }
    countryButtons = (profiles) =>{
        let countries = []
        profiles.forEach(profile => {
            if (countries.indexOf(profile.country) === -1){
                countries.push(profile.country)
            }
        })
        const buttons = countries.map(country => <button onClick={() => this.selectedCountry(country)}>{country}</button>) 
        
        return buttons
    }
    render() {
        return (
            <div>
            <div>
                <button onClick={() => this.selectedCountry('All')}>All</button>
                {this.countryButtons(this.state.profiles)}
            </div>
            <div>
                {this.FaceBookMember()}
            </div>
            </div>
        )
    }
}

export default  FaceBook