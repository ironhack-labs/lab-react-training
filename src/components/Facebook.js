import React, { Component } from 'react'
import '../assets/css/Facebook.css'
import profiles from '../data/berlin.json'

class Facebook extends Component {
    state = {
        profiles: [...profiles]
    }

    render() {
        return (
            <div className="Facebook">
                <div className="container">
                    <div className="row">
                        {
                            this.state.profiles.map((profile) => {
                                return (      
                                <div key={profile.lastName} className="col-12 card">
                                        <div className="d-flex">
                                            <div>
                                                <img alt="avatar" className='avatar' src={profile.img}></img>
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
                            }) 
                        }
                    </div>
                </div>        

            </div>
        )
    }
}

export default Facebook