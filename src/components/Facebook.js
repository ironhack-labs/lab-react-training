import { Component } from "react";
import profiles from '../data/berlin.json';

class Facebook extends Component {
    state = {
        selectedCountry: 'All',
    }

    handleFilterCountry = (country) => {
        this.setState({
            selectedCountry: country,
        })
    }   

    render() {
        const profileList = profiles;
        let countries = [];
        profileList.forEach(element => {
            if (!countries.includes(element.country)){
                countries.push(element.country)
            }
        });
        return (
            <>
            <div className='buttons'>
                <button className={'All' === this.state.selectedCountry ? 'background-blue' : 'background-white'} onClick={() => {this.handleFilterCountry('All')}}>All</button>
                {countries.map((country, index) => (
                    <button className={country === this.state.selectedCountry ? 'background-blue' : 'background-white'} onClick={() => {this.handleFilterCountry(country)}} key={index}>{country}</button>
                ))}                
            </div>
            {profileList.map((item, index) => (
            <div className={item.country === this.state.selectedCountry ? 'facebook-card-blue' : 'facebook-card'} key={index}>
            <img className='card-img'src={item.img} alt="user-pic"/>
            <div>
                <strong>First name</strong>: {item.firstName} <br/>
                <strong>Last name</strong>: {item.lastName} <br/>
                <strong>Country</strong>: {item.country} <br/>
                <strong>Type</strong>: {item.isStudent === false ? 'Teacher' : 'Student'}<br/>
            </div>
            </div>
            )
            )} 
            </>
        )
    }
}

export default Facebook;