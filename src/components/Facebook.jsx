import React from 'react';
import profiles from '../data/berlin.json';
import FacebookCard from './FacebookCard';
import { Button } from 'react-bootstrap'
import './DriverCard.css'

export default class Facebook extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            country: ''
        }
        this.allCountries = profiles.map(profile => profile.country)

        this.resultArr = this.allCountries.filter(
            (country,index) => {
                return this.allCountries.indexOf(country) === index;
            }
        )
    }

    selectCountry = (e) => {
        this.setState({
            country: e.target.innerText
          });
    }

    render() {
        return (
            <div>
                {this.resultArr.map(conutryName => <Button onClick={this.selectCountry} key={conutryName} >{conutryName}</Button>)}
                {
                    profiles.map((profile, index) =>  
                        <FacebookCard 
                            key={`${index}-${profile.name}`}
                            className={this.state.country === profile.country ? 'card-blue' : ''}
                            firstName= {profile.firstName} 
                            lastName= {profile.lastName} 
                            country= {profile.country} 
                            img={profile.img} 
                            isStudent={profile.isStudent}>
                        </FacebookCard>
                    )
                }
            </div>
        );
    }
}