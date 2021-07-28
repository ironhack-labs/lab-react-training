import React, { Component } from "react";
import "./facebook.css"
import profiles from '../data/berlin.json'

class Facebook extends Component {

    state = {

        people: profiles,
        color : 'white'
      

    }

    handleClick = (key) => {

        
        this.setState({
            color : 'white'
        })

    }


    render() {
        console.log(this.profilesColor)
        return (<div>
            {this.state.people.map(bt => {
                return (
                    <button key = {bt.country} onClick = {this.handleClick}> {bt.country} </button>
                )
            })}
            {this.state.people.map(perfil => {
                return (<div style = {{backgroundColor : this.state.color}} className='profile-facebook'>
                    <div>
                        <img src={perfil.img} />
                    </div>
                    <div className = 'profile-info'>
                        <div>
                            <h2>FirstName : {perfil.firstName}</h2> 
                        </div>
                        <div>
                            <h2>Lastname : {perfil.lastName}</h2>
                        </div>
                        <div>
                            <h2>Country : {perfil.country}</h2>
                        </div>
                        <div>
                            <h2>Type : {perfil.isStudent ? 'Student' :  "Teacher"}</h2>
                        </div>
                    </div>
                </div>
                )
            })}

        </div>
        )

    }
}

export default Facebook