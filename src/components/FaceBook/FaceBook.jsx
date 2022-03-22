import React, { Component } from 'react'
import profiles from '../../data/berlin.json'
import './FaceBook.css'

class Facebook extends Component {

    state = {
        selectedCountry: '',
        countries: []
    }

    filteredCountries() {
        const countries = []
        profiles.forEach( profile => {
            if (!countries.includes(profile.country)) {
                countries.push(profile.country)
            }
        })
        this.setState({
            countries: countries
        })
    }

    countryClicked(country){
        this.setState({
            selectedCountry: country
        })
    }

    componentDidMount() {
        this.filteredCountries()
    }


    render(){
        return (
            <div className='facebook-wrapper'>
            
            {this.state.countries.map((country, index)=>{
               return(
                    <div key={index} >
                        <button className="country-buttons" onClick={()=> this.countryClicked(country)} style={{backgroundColor: this.state.selectedCountry === country ? "#A3D2E2" : "#fff" }}> {country}</button>
                    </div>
               ) 
            })}

            <div>
            { profiles.map((profile, index) => {
                return(
                    <div key={index} className='facebook-card' style={{backgroundColor: this.state.selectedCountry === profile.country ? "#A3D2E2" : "#fff" }}>
                        <img src={profile.img} alt="facebook" />
                        <div className='facebook-card-body'>
                            <p><strong>First Name:</strong> {profile.firstName}</p>
                            <p><strong>Las Name:</strong> {profile.lastName}</p>
                            <p><strong>Country:</strong> {profile.country}</p>
                            <p><strong>Type:</strong> {profile.isStudent ? 'Student' :' Teacher'}</p>
                        </div>
                    </div>
                )
            })}
            </div>



            </div>
        )
    }
    
}





export default Facebook