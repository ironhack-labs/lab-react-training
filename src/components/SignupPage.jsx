import React, { Component } from 'react'
import profiles from '../data/berlin.json';


export default class SignupPage extends Component {
    // state={
    //     email:,
    //     password:,
    //     nationality,
    // }
    countries = profiles.map((element)=>element.country)
    countriesUniques = Array.from(new Set(this.countries));
    handleCountry=()=>{
        console.log('coucou')
    }

    render() {
        return (
            <div>
                <label htmlFor="email"></label>
                <input id="email" type="text"/>
                <label htmlFor="password"></label>
                <input id="password" type="text"/>
                <label htmlFor="nationality"></label>
                <select onChange={this.handleCountry}>
                    {this.countriesUniques.map((country)=>{
                    return   <option key={country} value={country}>{country}</option>})}
                </select>

            </div>
        )
    }
}
