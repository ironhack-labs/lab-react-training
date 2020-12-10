import profiles from '../../data/berlin.json';
import './FaceBook.css';
import React, { Component } from 'react';

export default class Facebook extends Component {

    state = {
        selectedCountry: '',
        // clicked: false
    }

    clickHandler = (event) => {
        console.log('e', event.target.value)
        this.setState({ 
            selectedCountry: event.target.value,
        })
        console.log(this.state.selectedCountry)
    }

    render() {

        const countriesAll = [...profiles].map(profile => profile.country);
        const countriesUnique = countriesAll.filter((country, index) => countriesAll.indexOf(country) === index)

        return (
            <>
                { countriesUnique.map(country => {
                        const selected = country === this.state.selectedCountry ? 'blue' : 'white';
                        return (
                            <button onClick={ this.clickHandler } value={country} style={{ backgroundColor: {selected} }} key={ country }> { country } </button>
                        )
                })}
                { profiles.map(profile => {
                    const selected = profile.country === this.state.selectedCountry ? 'blue' : 'white';

                    return (
                        <div className=".card" style={{ backgroundColor: {selected} }}>
                            <div className="card-img">
                                <img src={ profile.img } alt="ironhacker" />
                            </div>
                            <div className="card-text">
                                    <p><strong>First name:</strong> { profile.firstName } </p>
                                    <p><strong>Last Name:</strong> { profile.lastName } </p>
                                    <p><strong>Country: </strong> { profile.country } </p>
                                    <p><strong>Type:</strong> { profile.type } </p>
                            </div>
                        </div> 
                    )
                }) }  
            </>
        )
    }
}


    // displayButtons() {
    //     const countriesAll = [...profiles].map(profile => profile.country)
    //     const countriesUnique = countriesAll.filter((country, index) => countriesAll.indexOf(country) === index)

    //     countriesUnique.map(profile => {
    //         const selected = profile.country === this.state.selectedCountry && this.state.clicked ? 'blue' : 'white';
    //         return (
    //             <button onClick={ this.clickHandler } style={{ color: {selected} }} key={ profile.country }> { profile.country } </button>
    //         )
    //     })
    // }

    // displayProfiles = () => {
    //     profiles.map(profile => {
    //         const selected = profile.country === this.state.selectedCountry && this.state.clicked ? 'blue' : 'white';

    //         return (
    //             <div className=".card" style={{ color: {selected} }}>
    //                 <div className="card-img">
    //                     <img src={ profile.img } alt="ironhacker" />
    //                 </div>
    //                 <div className="card-text">
    //                         <p><strong>First name:</strong> { profile.firstName } </p>
    //                         <p><strong>Last Name:</strong> { profile.lastName } </p>
    //                         <p><strong>Country: </strong> { profile.country } </p>
    //                         <p><strong>Type:</strong> { profile.type } </p>
    //                 </div>
    //             </div> 
    //         )
    //     })
    // }