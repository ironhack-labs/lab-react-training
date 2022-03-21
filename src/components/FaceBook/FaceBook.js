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

        this.setState({
            countries: countriesArr
        });
    };

    chooseCountry(country){
        this.setState({
            countrySelected: country
        })
    }

    clearCountry(){
        this.setState({
            countrySelected: ''
        })
    }
    
    render(){
        return (
            <div className="facebook-div mt-3">
                <div className="country-btns-div container">
                    <button
                        style={{backgroundColor: this.state.countrySelected === '' ? "#a3d2e2" : "#fff" }}
                        onClick={() => this.clearCountry()}
                        className="country-btn m-1" 
                        key='all-countries'>
                            All
                    </button>
                    {
                        this.state.countries.map((country, index) => {
                            return (
                                <button
                                style={{backgroundColor: this.state.countrySelected === country ? "#a3d2e2" : "#fff" }}
                                onClick={() => this.chooseCountry(country)}
                                className="country-btn m-1" 
                                key={index}>
                                    {country}
                                </button>
                            )
                        })
                    }
                </div>
                {
                    profiles.map((profile, index) => {
                        return (
                            <div 
                            style={{backgroundColor: this.state.countrySelected === profile.country ? "#a3d2e2" : "#fff" }}
                            className="facebook-card container"
                            key={index}>
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