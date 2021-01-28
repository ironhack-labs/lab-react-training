import React, { Component } from 'react'
import profiles from '../../data/berlin.json';
import './FaceBook.css'

class FaceBook extends Component {
    constructor(props){
        super(props)
        this.state = {
            fbProfiles:profiles,
            countryFilter: '',
            isVisible: ''
        }
    }

    selectProfile = (e) =>{
        e.preventDefault()
        const countrySelected = e.target.innerHTML
        this.setState({
            countryFilter: countrySelected
        })
    }

    createCountryButtons = () => {
        const countries =  [...new Set(this.state.fbProfiles.map(profile => profile.country))];
        const countryFilters = countries.map(country => <button className='button' onClick={this.selectProfile}>{country}</button>)
        return countryFilters
    }

    renderProfiles = () =>{
        const fbProfiles = this.state.fbProfiles.map(profile => {
            let type = 'Teacher'
            if(profile.isStudent){
                type='Student'
            }
    
            const hidden = (this.state.isVisible !== (profile.firstName+' '+profile.lastName))
            return (
                <div className="box fbProfile" style={{backgroundColor: this.state.countryFilter === profile.country ? '#A3D2E2' : ''}}>
                    <div className='columns'>
                        <div className='column is-half'>
                            <div className="media-left">
                                <figure className="image is-124x124">
                                    <img name={profile.firstName+' '+profile.lastName}src={profile.img} onClick={this.showDetails} alt="profile" />
                                </figure>
                            </div>
                        </div>
                        <div className='column is-half' style={{display: hidden ? 'none' : ''}}>
                            <div className="content">
                                <p>First Name: {profile.firstName}</p>
                                <p>Surname: {profile.lastName}</p>
                                <p>country: {profile.country}</p>
                                <p>Type: {type}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
        return fbProfiles
    }
    
    showDetails = (e) =>{
        let name = e.target.name
        if(this.state.isVisible === name){
            name = ''
        }

        this.setState({
            isVisible: name,
           
        })
    }


    render() {
        const fbProfiles = this.renderProfiles()
        const countryFilters = this.createCountryButtons()
        return (
            <div>
                <div className="buttons are-medium">
                    {countryFilters}
                </div>
                {fbProfiles}
            </div>
        )
    }
}

export {FaceBook}