import "./FaceBook.css"
import { Component } from "react"
import profiles from '../../data/berlin.json'
import { id } from "postcss-selector-parser";

class FaceBook extends Component {
    constructor (props) {
        super(props)

        this.state = {
            clickedCountry: ""
        }
    }

    onHighlight = (event) => {
        let countryClicked = event.target.innerHTML
        if(countryClicked === "All") {
            this.setState({clickedCountry: ""})
        }
        this.setState({clickedCountry: countryClicked})
    }

    render () {
        let profileMap = profiles.map(profile => [profile.country, profile])
        var profileMapArr = new Map(profileMap)
        let uniques = [...profileMapArr.values()]
        let countries = uniques.map(profile => profile.country)

        return (
            <div className="FaceBook">
                <div>
                    <button onClick={this.onHighlight} className="btn btn-info" style={{backgroundColor: "transparent"}}>All</button>
                    {countries.map((country) => {
                        return (
                            <button key={country} className="btn btn-info" onClick={this.onHighlight} style={{backgroundColor: country==this.state.clickedCountry ? "#caa6f7" : "transparent"}}>
                                {country}
                            </button>
                        )
                    })}
                </div>
                <div className="cards">
                    {profiles.map((profile) => {
                        return (
                            <div key={`${profile.fistName}-${profile.lastName}`} style={{backgroundColor: profile.country==this.state.clickedCountry ? "#caa6f7" : "transparent"}} className="flex">
                                <img src={profile.img}></img>
                                <div className="flex-start">
                                    <p><b>FirstName</b>: {profile.firstName}</p>
                                    <p><b>LastName</b>: {profile.lastName}</p>
                                    <p><b>Country</b>: {profile.country}</p>
                                    <p><b>Type</b>: {profile.isStudent === true ? "Student" : "Teacher"}</p>
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