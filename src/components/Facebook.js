import profiles from '../data/berlin.json';
import React, { Component } from 'react'

class Facebook extends Component {
    constructor(props) {
        super(props)
        this.state = {
            profilesFB: profiles
        }

    }


    filtrarPais = (evento) => {

        for (let i = 0; i < this.state.profilesFB.length; i++) {
            let bgcolor = ""
            if (evento.target.value === this.state.profilesFB[i].country) {
                bgcolor = 'blue'
            }
            else {
                bgcolor = 'white'
            }
        }
    }




    render() {
        const lista = this.state.profilesFB.map(contact => {
            const style = { background: contact.bgcolor };
            return <div style={style}>
                <img src={contact.img} alt="imag" />
                <h3>{contact.firstName}</h3>
                <h3>{contact.lastName}</h3>
                <h3>{contact.country}</h3>
                <h3>Type {contact.isStudent ? "Student" : "Teacher"}</h3>
            </div>
        })

        let obj = {};
        let paises = []
        for (let i = 0; i < this.state.profilesFB.length; i++) {
            obj[this.state.profilesFB[i]['country']] = paises[i];
        }
        for (let key in obj) {
            paises.push(key);
        }

        const botones = paises.map(pais => {
            return <button type="submit" onClick={this.filtrarPais} value={pais}>{pais}</button>
        })

        return (
            <div>
                {botones}
                {lista}
            </div>
        )
    }


}

export default Facebook