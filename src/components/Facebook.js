import React, { Component } from 'react';
import profiles from '../data/berlin.json';


export default class Facebook extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [...profiles]
        }
    }

    getProfile() {
        return this.state.data.map(ele => (
            <div className="profileCard">
                <div>
                    <img className="fbPhoto" src={ele.img} />
                </div>
                <div>
                    <p><strong>First name:</strong> {ele.firstName}</p>
                    <p><strong>Last name:</strong> {ele.lastName}</p>
                    <p><strong>Contry:</strong> {ele.country}</p>
                    {ele.isStudent && <p><strong>Type:</strong> Student</p>}
                    {!ele.isStudent && <p><strong>Type:</strong> Teacher</p>}

                </div>

            </div>
        ))
    }

    render() {
        return (
            <div>
                {this.getProfile()}
            </div>
        )
    }
}

