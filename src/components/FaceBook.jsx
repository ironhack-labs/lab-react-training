import React, { Component } from 'react'
import profiles from "./../data/berlin.json";
import "./../styles/Facebook.css";

export default class FaceBook extends Component {
    state= {
        selectedCountry: null
    }
    selectCountry = (evt) => {
        this.setState({selectedCountry: evt.target.innerText})
    }
    render() {
        return (
            <div>
                {profiles.map(profile=> profile.country)
                .filter((country,i,arr)=>arr.indexOf(country)===i)
                .map((country,i)=>
                <button onClick={this.selectCountry} key={i}>{country}</button> )
                }
                {profiles.map((profile,i)=>
                <div key={i} className="profile-box" style={{
                    backgroundColor: profile.country===this.state.selectedCountry ? "blue" : "white"
                }}>
                    <img src={profile.img} alt=""/>
                    <div className="profile-info" >
                        <p><strong>First name: </strong>{profile.firstName}</p>
                        <p><strong>Last name: </strong>{profile.lastName}</p>
                        <p><strong>Country: </strong>{profile.country}</p>
                        <p><strong>Type: </strong>{profile.isStudent ? "Student" : "Not a student"}</p>
                    </div>
                </div>
                )}
            </div>
        )
    }
}
