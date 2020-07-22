import profiles from '../data/berlin.json';
import React, { Component } from 'react'
import './Facebook.css';


export default class FaceBook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            people: [...profiles]             
        }
      }
   
    render() {
        let people = this.state.people.map(user => (
            <div className="card" key={user.firstName}>
                <img className="userimg" src={user.img} alt="userimg" />
                <div className="card-body">
                    <ul className="card-text">
                        <li><b>First name</b>: {user.firstName}</li>
                        <li><b>Last name</b>: {user.lastName}</li>
                        <li><b>Country</b>: {user.country}</li>
                        <li><b>Type</b>: {user.Teacher ? true: 'Student'}</li>
                    </ul> 
                </div>
            </div>
          ));
        return (
            <div>
                {people}
            </div>
        )
    }
}
