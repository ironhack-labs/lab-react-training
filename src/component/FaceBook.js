import React, { Component } from 'react'
import profiles from '../data/berlin.json'
import "./FaceBook.css"

export class FaceBook extends Component {
        state = {
                selectedCountry: '',
                selectedProfiles: profiles,
                search: ''

        };

        filterByCountry = (event) => {
                this.setState({
                        selectedCountry: event.target.textContent,
                });
        };


        sortList = () => {
                this.setState({
                        selectedProfiles: this.state.selectedCountry === "All"
                                ? profiles
                                : profiles.filter(per => per.country === this.state.selectedCountry),
                })

        };

        handleSearch = (event) => {
                event.preventDefault();
                const searchedValue = (event.target.value).toLowerCase();
                this.setState({ search: searchedValue });

                const keys = Object.keys(profiles[0]);
                const list = [...profiles].filter(profile => keys.some(column => profile[column].toString().toLowerCase().indexOf(searchedValue) > -1))
        
                this.setState({selectedProfiles : list})
        }

        render() {
                // const listCountry = [...profiles].map(per => per.country).reduce((list, country) => {
                //         list.indexOf(country) === -1 && list.push(country)
                //         return list
                // }, []);

                const listCountry = [...new Set([...profiles].map(per => per.country))];

                return (
                        <div className="FaceBook-section">
                                <div className="listCountry">
                                        <div>
                                                <button
                                                        onClick={this.filterByCountry}
                                                        style={{
                                                                backgroundColor: this.state.selectedCountry === "All" ? "lightblue" : 'white'
                                                        }}
                                                >All</button>

                                                {listCountry.map((country, i) => {
                                                        return (
                                                                <button key={i}
                                                                        onClick={this.filterByCountry}
                                                                        style={{ backgroundColor: this.state.selectedCountry === country ? "lightblue" : 'white' }}
                                                                >{country}</button>
                                                        )
                                                })}

                                        </div>


                                        <button onClick={this.sortList} className="btnSort">Sort by Country</button>

                                        <input type="text" name="search" id="search" value={this.state.input} placeholder="Search profile" onChange={this.handleSearch}></input>


                                </div>

                                <div className="listFaceBook">

                                        {this.state.selectedProfiles.map((person, id) => {
                                                return (
                                                        <div className="profile-cart"
                                                                key={id}
                                                                onClick={this.clickPicture}
                                                                style={{ backgroundColor: this.state.selectedCountry === person.country ? "lightblue" : 'white' }}
                                                        >

                                                                <img src={person.img} alt={person.firstName}></img>
                                                                <div>
                                                                        <p><strong>First Name: </strong><span>{person.firstName}</span></p>
                                                                        <p><strong>Last Name: </strong><span>{person.lastName}</span></p>
                                                                        <p><strong>Country: </strong><span>{person.country}</span></p>
                                                                        <p><strong>Type: </strong><span>{person.isStudent === true ? "Student" : "Teacher"}</span></p>
                                                                </div>


                                                        </div>

                                                )
                                        })}
                                </div>


                        </div>
                )
        }


}

export default FaceBook