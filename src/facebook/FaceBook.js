import React, { Component } from 'react'
import allProfiles from '../data/berlin.json'

export default class FaceBook extends Component {
    state = {
        profiles : allProfiles,
        countries: [...new Set(allProfiles.map(el => el.country))],
        selectedCountry: ''
    }

    handleCountries = event =>  {
        this.setState({
            selectedCountry: event.target.value
        })
    }
 
    render() {
        return (

            <>

            <div className="countries-button">
                {
                    this.state.countries.map(country => 
                    <button onClick={this.handleCountries} value={country}>{country}</button>)
                }
            </div>

            <div>
                {
                    this.state.profiles.map(el => {
                        return (
                            <div className="idCard" style={{backgroundColor: el.country === this.state.selectedCountry ? "lightblue": "white" }}>
                                <img src={el.img} alt="person"/>
                                <div className="infos">
                                    <p>
                                        <strong>First Name: </strong> {el.firstName}
                                    </p>
                                    <p>
                                        <strong>Last Name: </strong> {el.lastName}
                                    </p>
                                    <p>
                                        <strong>Country: </strong> {el.country}
                                    </p>
                                    <p>
                                        <strong>Type: </strong> {
                                            el.isStudent? "Student" : "Teacher"
                                        }
                                    </p>
                                </div>  
                            </div> 
                        )
                    })
                }
            </div>
            </>
        )
    }
}
