import React, { Component } from 'react'
import allProfiles from '../data/berlin.json'
import '../idcard/IdCard.css'

export default class FaceBook extends Component {

    state={
        profiles:allProfiles,
        countries:[...new Set(allProfiles.map(profile=>profile.country))],
        selectedCountry:''

    }

    handleCountry=event=>{
        this.setState({
            selectedCountry:event.target.textContent
        })
        // event.target.setAttribute('className','blueBtn')
 
    }

    render() {
        return (
            <div>
            {
                this.state.countries.map(country=>
                <button style={{backgroundColor: country===this.state.selectedCountry? 'lightblue':'white'}} onClick={this.handleCountry}>{country}</button>)
            }
            <div>{
                this.state.profiles.map(profile=>{
                    let type='Student'
                    if(!profile.isStudent)type='teacher'
                    return(
                    <div className='card-container' style={{backgroundColor: profile.country===this.state.selectedCountry? 'lightblue':'white', margin:'10px'}}>
                        <div className="picture-container">
                            <img style={{width:'100px'}} src={profile.img} alt=""/>
                        </div>
                        <div className="info-container">
                            <span>First name:{profile.firstName}</span>
                            <span>Last name:{profile.lastName}</span>
                            <span>Country:{profile.country}</span>
                            <span>Type:{type}</span>
                        </div>
                    </div>
                    )
                })
            }
            </div>
            </div>
        )
    }
}
