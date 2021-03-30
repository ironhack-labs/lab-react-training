import React, { Component } from 'react'
import '../assets/css/Facebook.css'
import profiles from '../data/berlin.json'

class Facebook extends Component {
    state = {
        profiles: [...profiles].map(profile => {
            return {...profile, color: "#fff"}
        }),
        countries: [...profiles].map(profile => profile.country)
    }


    handleFilterCountry = (country) => {
        const profilesFacebook = [...this.state.profiles]

        profilesFacebook.forEach(profile => {
            profile.country === country ? profile.color= "#a4d3e2" : profile.color="#fff"
        })

        this.setState({ profiles: profilesFacebook})
    }

    render() {
        return (
            <div className="Facebook">
                <div className="container">
                {this.state.countries.map((country, index) => <button onClick={() => this.handleFilterCountry(country)} key={index}>{country}</button>)}
                    <div className="row">
                        {
                            this.state.profiles.map((profile) =>      
                                <div key={profile.lastName} className="col-12 card" style={{backgroundColor: profile.color}}>
                                        <div className="d-flex">
                                            <div>
                                                <img className='avatar' src={profile.img} alt="avatar"></img>
                                            </div>
                                            <div className="info">
                                                <p><b>First name:</b> {profile.firstName}</p>
                                                <p><b>Last name:</b> {profile.lastName}</p>
                                                <p><b>Country:</b> {profile.country}</p>
                                                    {
                                                        profile.isStudent ? <p><b>Type:</b> Student</p> : <p><b>Type:</b> Teacher</p>
                                                    }
                                            </div>
                                        </div>
                                </div>
                            ) 
                        }
                    </div>
                </div>        

            </div>
        )
    }
}

export default Facebook