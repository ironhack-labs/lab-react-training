import React, { Component } from 'react'
import profilesJson from './berlin.json';

export default class Facebook extends Component {

    state = {
        profiles: profilesJson,
        clickedCountry: ''
    }

    filterArrByCountry = () => {
        const countryArr= this.state.profiles.map(profile => profile.country)
        const unqiqueSet = new Set(countryArr)
        const uniqueArr= [...unqiqueSet]
        return uniqueArr
    }

    changeBackground = (e, profile) => {
        e.preventDefault()
        
        // const filteredByCountry = this.state.profiles.filter(profiles => profiles.country === profile.country)

        this.setState({
            clickedCountry: profile
        })
    }

    render() {

        const filterdByCountry = this.filterArrByCountry()

        return ( 
            <div>
            {filterdByCountry.map((profile, index) => 
                <button 
                    key={index} 
                    onClick={(e) => this.changeBackground(e, profile)}
                    style={{ backgroundColor: profile === this.state.clickedCountry && 'lightblue' }} 
                    >
                        {profile}
                    </button>
            )}

            {this.state.profiles.map((profile, index) => 
                <div 
                    className='id-card' 
                    key={index}  
                    style={{ backgroundColor: profile.country === this.state.clickedCountry && 'lightblue' }} 
                    >
                        <img src={profile.img} alt='' />
                        <p><b>First name: </b>{profile.firstName}</p>
                        <p><b>Last name: </b>{profile.lastName}</p>
                        <p><b>Country: </b>{profile.country}</p>
                        <p><b>Type: </b> {profile.isStudent ? 'Student' : 'Teacher'}</p>
                </div>
            )}  
            </div>            
        )
    }
}
