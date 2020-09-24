import React, { Component } from 'react';
import profiles from '../data/berlin.json';
import FacebookCard from './FacebookCard';
import { Button } from 'react-bootstrap'
import './DriverCard.css'

let allCountries = []
let resultArr = []


class Facebook extends Component {
    constructor(props) {
        super(props)
        this.state = {
            country: 'England'
        }

        //Country Array
        profiles.map(c => (allCountries.push(c.country)))
        resultArr = allCountries.filter((data,index)=>{
            return allCountries.indexOf(data) === index;
          })
    }

    selectCountry = (e) => {
        this.setState({
            country: e.target.innerText
          });
    }

    
    render() {
        console.log(this.state.country);
        return (
            <ul>
                {resultArr.map(r => 
                    <Button onClick={this.selectCountry}>{r}</Button>)}
                    
                {profiles.map(p =>  
                    <FacebookCard 
                    className={this.state.country === p.country ? 'card-blue' : ''}
                    firstName= {p.firstName} 
                    lastName= {p.lastName} 
                    country= {p.country} 
                    img={p.img} 
                    isStudent={p.isStudent}>
                </FacebookCard>)}
            </ul>
        );
    }
}

export default Facebook