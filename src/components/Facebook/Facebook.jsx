import './Facebook.css'
import React, { Component } from 'react';
import profiles from '../../data/berlin.json'

class Facebook extends Component {
    state = {
        countryToFilter: null
    }

    filterCountry = (country) => {
        this.setState((prevState) => {
            return {
              countryToFilter: country.target.value
            }
        })
    }

    btnDiv = () => {
        const countryArr = [...new Set(profiles.map(student => student.country))];
        return countryArr.map((country) => {
            return (
                <button onClick={this.filterCountry} value={country} style={{backgroundColor: country === this.state.countryToFilter ? "#799dff" : "white"}}>
                    {country}
                </button>
            )
        })
    }

    studentDiv = () => {
        return profiles.map((student) => {
            return (
                <div className="student-card" style={{backgroundColor: student.country === this.state.countryToFilter ? "#799dff" : "white"}} >
                    <div>
                        <img alt ="" src={student.img} width="150px" />
                    </div>
                    <div>
                        <p><b>First name:</b> {student.firstName}</p>
                        <p><b>Last name:</b> {student.lastName}</p>
                        <p><b>Country:</b> {student.country}</p>
                        <p><b>Type:</b> {student.isStudent ? 'Student' : 'Teacher'}</p>
                    </div>
                </div >
            )
        })
    }
    
    render() {
        return (
            <div className="super-container">
                <div className="super-btn-container">
                    {this.btnDiv()}
                </div>
                <div className="super-students-container">
                    {this.studentDiv()}
                </div>
            </div>
        )
    }
}

export default Facebook