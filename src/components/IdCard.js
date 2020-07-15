import React, { Component } from 'react'

export default class IdCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            persons: [
                {
                    lastName:'Doe',
                    firstName:'John',
                    gender:'male',
                    picture:'https://randomuser.me/api/portraits/men/44.jpg',
                    height: 178,
                    birth: 'Tue Jul 14 1992'
                },
                {
                    lastName:'Delores',
                    firstName:'Obrien',
                    gender:'female',
                    picture:'https://randomuser.me/api/portraits/women/44.jpg',
                    height: 172,
                    birth: 'Tue May 11 1993'
                }
            ]
        }
    }

    render() {
        const personsColections = this.state.persons.map((ele, i) => (
            <div className="card" key={i}>
                <img src={ele.picture} alt={ele.firstName} />
                <div className="personInfo">
                    <p><strong>First name:</strong> {ele.firstName}</p>
                    <p><strong>Last name:</strong> {ele.lastName}</p>
                    <p><strong>Gender:</strong> {ele.gender}</p>
                    <p><strong>Height:</strong> {ele.height/100}</p>
                    <p><strong>Birth:</strong> {ele.birth}</p>
                </div>
            </div>
        ))
        
        return (
            <div>
                {personsColections}
            </div>
        )
    }
}
