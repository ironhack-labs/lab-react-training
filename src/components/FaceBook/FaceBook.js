import React, { Component } from 'react';
import profiles from '../../data/berlin.json';
import './FaceBook.css';

export default class FaceBook extends Component {
    state = {
        selected: 'All'
    }
    
    toggleCountries = (e) => { 
        this.setState({ selected: e.target.innerHTML }); 
    }
    
    sortProfiles = (arr) => {
        if (this.state.selected === 'All') { return profiles; }
        const copy = arr.slice();
    
        return copy.sort((a, b) => {
          if (this.state.selected === a.country) {
            return -1; 
          } else {
            return 1; 
          }
        });
    }
    
    render() {
        const allCountries = profiles.map(e => e.country);
        const uniqueCountries = [...new Set(allCountries)]; 
        const sortedProfiles = this.sortProfiles(profiles);
    
        return (
            <div>
                <div className='all-countries'>
                    <button className={this.state.selected === 'All' ? 'country-btn selected' : 'country-btn'} onClick={(e) => this.toggleCountries(e)} >
                        All
                    </button> {uniqueCountries.map((e, i) => <button className={this.state.selected === e ? 'country-btn selected' : 'country-btn'} onClick={(e) => this.toggleCountries(e)} key={i} > {e} </button>)}
                </div>
        
                {sortedProfiles.map((e, i) =>   
                    <div className={e.country === this.state.selected ? 'card selected' : 'card'} key={i}>
                    <div className='card-img'>
                        <img src={e.img} alt='identification pic' />
                    </div>
        
                    <div className='card-profile'>
                        <p><b>First name:</b> {e.firstName}</p>
                        <p><b>Last name:</b> {e.lastName}</p>
                        <p><b>Country:</b> {e.country}</p>
                        <p><b>Type:</b> 
                        {e.isStudent
                            ? <span> Student</span>
                            : <span> Teacher</span>
                        }
                        </p>
                    </div>
                    </div>
                )}
            </div>
        )
    }
}
