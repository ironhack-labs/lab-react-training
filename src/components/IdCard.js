import React from 'react';

class IdCard extends React.Component {
    render(){
        console.log(this.props)
        const {lastName, firstName, gender, height, birth, picture} = this.props
        return (
            <div className="IdCard">
                <img src={picture} alt={firstName}/>
                <div className="IdCardText">
                    <p>LastName: {lastName}</p>
                    <p>FirstName: {firstName}</p>
                    <p>Gender: {gender}</p>
                    <p>Height: {height/100} m</p>
                    <p>Birth: {birth.toDateString()}</p>
                </div>
            </div>
      );
    }
  }
  
  export default IdCard;