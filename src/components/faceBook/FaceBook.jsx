import React from "react"
import "./FaceBook.css"
import profiles from '../../data/berlin.json';

export default class FaceBook extends React.Component{
    state = {
        clicked: "",
    }

    selectCountry = (event) => {
        this.setState({
            clicked: event.target.value 
        });
    }

    filterCountries = () => {
        let countries = [...new Set(profiles.map((profile) => profile.country))]
        return countries
    }
    
    render(){
        
        return(
            <div className="FaceBook">
                <div className="buttons">
                    <button>All</button>
                    {this.filterCountries().map((country, key) => (
                        <button onClick={this.selectCountry} value={country}>{country}</button>
                    )
                    )}
                </div>

            {profiles.map((profile) => (
                <div key={profile.firstName} className={profile.country === this.state.clicked ? "profileCardBlue" : "profileCard"}>
                    <div>
                        <img src={profile.img} className="profileCardImage"></img>
                    </div>
                    <div className="dataColumn">
                        <div className="dataRow"><p><strong>First name:</strong> {profile.firstName}</p></div>
                        <div className="dataRow"><p><strong>Last name:</strong>  {profile.lastName}</p></div>
                        <div className="dataRow"><p><strong>Country:</strong>  {profile.country}</p></div>
                        <div className="dataRow"><p><strong>Type:</strong></p> {profile.isStudent ? <p> Student</p> : <p> Teacher</p>}</div>
                    </div>
                </div>
            )
            )}
            </div>
        )
    }
}