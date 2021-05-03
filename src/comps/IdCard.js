// imports 
import React from 'react'


//components
class IdCard extends React.Component{
    render(){
        const {lastName, firstName, gender, height, birth, picture} = this.props
        return(
            <div className='card'>
            <img src={picture} alt={firstName}/>
            <div>
            <p>First Name: {firstName} </p>
            <p>Last Name: {lastName}</p>
            <p>Gender: {gender}</p>
            <p>height: {height/100}m</p>
            <p>Birth: {birth.toDateString()}</p>
            </div>

            </div>
        )
    }
}




// exports
export default IdCard;