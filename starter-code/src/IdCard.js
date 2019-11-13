import React, { Component } from 'react'
import './styles.css'

export class IdCard extends Component {
state = {
            Cards: [
                {lastName: "Delores",
                 firstName: "Obrien",
                 gender: "female",
                 height: "1.72m",
                 birth: "1988-05-11",
                 picture: "https://randomuser.me/api/portraits/women/44.jpg"},
                { lastName:"Doe",
                  firstName: "John",
                  gender: "male",
                  height: "1.78m",
                  birth: ("1992-07-14"),
                  picture:"https://randomuser.me/api/portraits/men/44.jpg"}
                ]}

    showCards = () =>{
        return this.state.Cards.map((eachCard, i)=>{
            return(
                <div key={i} className="IdCard box">
                <img src={eachCard.picture}/>
                <div className="right">
                <strong>First Name:</strong>
                {eachCard.firstName}
                <br/>
                <strong>Last Name:</strong>
                {eachCard.lastName}
                <br/>
                <strong>Gender:</strong>
                {eachCard.gender}
                <br/>
                <strong>Height:</strong>
                {eachCard.height}
                <br/>
                <strong>Birth:</strong>
                {eachCard.birth}
                <br/>
                </div>
               </div>

            )
        })
    }
    
    

    
    render() {
        return (
            <div>
            {this.showCards()} 
            </div>
        )
    }
}

export default IdCard

