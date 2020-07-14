import React, { Component } from 'react'
import data from '../data/berlin.json';

export default class Facebook extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            myContacts: [...data]             
        }
      }
    
    render() {

        const myContacts = this.state.myContacts.map(person => (
            <div className="card-horizontal mt-3 ml-3">
                <img src={person.img} alt="Person's face" />
                <div className="card-body">
                    <ul className="card-text">
                        <li><b>First name</b>: {person.firstName}</li>
                        <li><b>Last name</b>: {person.lastName}</li>
                        <li><b>Country</b>: {person.country}</li>
                        <li><b>Type</b>: {person.isStudent ? 'Student': 'Teacher'}</li>
                    </ul> 
                </div>
            </div>
          ));

        return (
        <div className="card border-dark">
            {myContacts}
        </div>
        )
    }
}
