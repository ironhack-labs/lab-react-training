import React from 'react'
import profiles from '../data/berlin.json'

class FaceBook extends React.Component {
    constructor(props){
        super(props) 
        this.state = {
            profiles: profiles,
            countries: ["All",...new Set(profiles.map((profile) => profile.country))],
            activeCountry: "",
        }
    }
    handleClick = (country) => {
        if(country === "All"){
            this.setState({
                activeCountry: ""
            })
        } else {
            this.setState({
                activeCountry: country
            })
        }
    }

    handleSort = (sorting) => {
        let cloneProfiles = [...this.state.profiles]
        cloneProfiles.sort((a, b) => {
            if (a[sorting] < b[sorting]) {
                return -1
            } else if (a[sorting] > b[sorting]){
                return 1
            }
            return 0
        })
        this.setState({
            profiles: cloneProfiles,
        })
    }

    render () {
        return (
            <div>
                <button onClick={() => this.handleSort("firstName")}>Sort by First Name</button>
                <button onClick={() => this.handleSort("lastName")}>Sort by Last Name</button>
                <button onClick={() => this.handleSort("country")}>Sort by Country</button>
                <div>
                {this.state.countries.map((country, i) => {
                    return (
                        <button onClick={() => this.handleClick(country)} key={"country"+i} className={this.state.activeCountry === country? "isActive" : ""}>{country}</button>
                    )
                })}
                </div>
            {this.state.profiles.map((profile, i) => {
                return (
                    <div key={"profile"+i} className={this.state.activeCountry === profile.country? "profile isActive" : "profile"} >
                        <div className="picture">
                            <img src={profile.img} alt={profile.firstName} />
                        </div>
                        <div className="infos">
                            <p><strong>First Name:</strong> {profile.firstName}</p>
                            <p><strong>Last Name:</strong> {profile.lastName}</p>
                            <p><strong>Country:</strong> {profile.country}</p>
                            <p><strong>Type:</strong> {profile.isStudent? "Student" : "Teacher"}</p>
                        </div>
                    </div>
                )
            })}
            </div>
        )
    }
}

export default FaceBook