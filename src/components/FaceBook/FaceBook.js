import React, {Component} from 'react';
import './FaceBook.css';
import profiles from '../../data/berlin.json';

class FaceBook extends Component {
    state = {
        countrySelected: '',
        countries: []
    }

    componentDidMount(){
        this.listCountries();
    }

    listCountries(){
        const countriesArr = [];

        profiles.forEach(profile => {
            if(!countriesArr.includes(profile.country)){
                countriesArr.push(profile.country);
            };
        });
    };

    studentMatchCountry(){
        //...
    }
    
    render(){
        return (
            <div className="facebook-div mt-3">
                {
                    this.state.countries.map((country, index) => {
                        return (
                            <div className="country-button" key={index}>
                                <button>{country}</button>
                            </div>
                        )
                    })
                }
                {
                    profiles.map((profile, index) => {
                        return (
                            <div className="facebook-card container" key={index}>
                                <img src={`${profile.img}`} alt="" />
                                <div className="facebook-card-content">
                                    <p><span>First name</span>: {profile.firstName}</p>
                                    <p><span>Last name</span>: {profile.lastName}</p>
                                    <p><span>Country</span>: {profile.country}</p>
                                    <p><span>Type</span>: {profile.isStudent ? 'Student' : 'Teacher'}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default FaceBook;