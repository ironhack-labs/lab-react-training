import React, { Component } from 'react';
import Profile from './Profile';
import profiles from '../data/berlin.json';
import Button from './Button'; 

class FaceBook extends Component {
  state = {
    profiles: profiles,
    selectedCountry: false,  
  }
  handleProfiles = () => {
    return this.state.profiles.map((profile,index)=>{
      return <Profile key={index} selectedCountry={this.state.selectedCountry} img={profile.img} name={profile.firstName} lastname={profile.lastName} country={profile.country} type={(profile.isStudent? 'Student' : 'Teacher')} />
    })
  }
  
  handleCountryclicked =(selectedCountry) => {
    this.setState({
      selectedCountry
    })
    console.log(selectedCountry)
  }
  createButtons = () => {
    let arrayCountries = [];
    profiles.forEach(element => {
      if(!arrayCountries.includes(element.country)){
        arrayCountries.push(element.country)
      }
    });
    return arrayCountries.map((country, index) => {
      return <Button handleCountryClicked={this.handleCountryclicked} selectedCountry={this.state.selectedCountry} key={index} country={country} />
    })
  }

  filterCountries = (country) => {
    console.log('USA')
    this.setState({
      profiles: profiles.filter((profile) => profile.country.includes(country))
    });
  }

  render(){
    return (<div><button className="ButtonCountry" style={{"backgroundColor": "white"}} onClick={this.filterCountries}>All</button>{this.createButtons()} {this.handleProfiles()}</div>)
  }
}

export default FaceBook;