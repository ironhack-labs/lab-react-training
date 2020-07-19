import profiles from '../data/berlin.json';
import React, { Component } from 'react'

class Facebook extends Component {
    constructor(props) {
        super(props)
        this.state = {
            profilesFB: profiles
        }

    }

    filtrarPais=(evento)=>{
        if(evento.target.value === this.state.profilesFB.country){

        }
    }


    render() {
        const lista = this.state.profilesFB.map(contact => {
            return <div>
                <img src={contact.img} alt="imag"/>
                <h3>{contact.firstName}</h3>
                <h3>{contact.lastName}</h3>
                <h3>{contact.country}</h3>
                <h3>Type {contact.isStudent ? "Student" : "Teacher"}</h3>
            </div>
        })


        return (
            <div>
                {lista}
            </div>
        )
    }


}

export default Facebook