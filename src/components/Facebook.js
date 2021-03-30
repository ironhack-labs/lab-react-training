import React, { Component } from 'react';
import profiles from '../data/berlin.json';
import FacebookItem from './FacebookItem';
import '../assets/css/Facebook.css'

export default class Facebook extends Component {
    state = {
        countries: Array.from(new Set(profiles.map(p => p.country))),
        countrySelect: '',
        expand: false
    }

    
    handleCountryClick = (e) => {
        this.setState({ countrySelect: e.target.value })
    }
    
    expand = () => {
        let expand = false
        if (!this.state.expand) { expand = true; }
        this.setState({ expand: expand })
    }
    
    buttonCountries = () => {
        let countriesB = !this.state.expand ? this.state.countries.slice(0, 4) : this.state.countries
        return (<div>
            <button className='buttonCountries'
                onClick={this.handleCountryClick}
                value=''>All</button>
            {
                countriesB.map((p, i) => {
                    const color = this.state.countrySelect === p
                        ? '#a3d2e2'
                        : 'transparent'
                    return (
                        <button
                            style={{ backgroundColor: color }}
                            className='buttonCountries'
                            onClick={this.handleCountryClick}
                            key={i} value={p}>{p}
                        </button>)
                })
            }
            <button onClick={this.expand}>···</button>
        </div>)
    }
    
    render() {
        return (
            <div>
                <div className='divButtonCountries'>
                    {
                        this.buttonCountries()
                    }
                </div>
                <div className='Facebook'>
                    {
                        profiles.map((item, i) => {
                            return (<FacebookItem key={i} {...item}
                                color={this.state.countrySelect === item.country
                                    ? '#a3d2e2'
                                    : 'transparent'
                                } />)
                        })
                    }
                </div>
            </div>
        )
    }
}