import React from 'react'

class IdCard extends React.Component{
    render(){
        const {lastName, firstName, gender, height, birth, picture}=this.props
        return (
            <div className="card box">
                <img src={picture} alt={firstName}/>
                <div>
                    <p><b>FirstName: </b>{firstName}</p>
                    <p><b>LastName: </b>{lastName}</p>
                    <p><b>Gender: </b>{gender}</p>
                    <p><b>Height: </b>{height/100}m</p>
                    <p><b>Birth: </b>{birth.toDateString()}</p>                    
                </div>
            </div>
        )
    }
}

export default IdCard