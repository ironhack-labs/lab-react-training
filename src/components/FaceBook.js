import React from 'react'
import profiles from '../data/berlin.json'

class FaceBook extends React.Component {
    constructor(props){
        super(props) 
        this.state = {
            profiles: profiles,
            countries: ["All",...new Set(profiles.map((profile) => profile.country))],
            isActive: false
        }
    }
    handleClick = (country) => {
        if(country === "All"){
            this.setState({
                isActive: true
            })
        }
    }
    render () {
        return (
            <div>
            {this.state.countries.map((country, i) => {
                return (
                    <button onClick={() => this.handleClick(country)} key={"country"+i} className={this.state.isActive? "isActive" : ""}>{country}</button>
                )
            })}
            {this.state.profiles.map((profile, i) => {
                return (
                    <div key={"profile"+i} className={this.state.isActive? "isActive profile" : "profile"} >
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