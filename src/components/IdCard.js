import React from 'react';


class IdCard extends React.Component {

    render() {
    const {lastName, firstName, gender, height, birth, picture} = this.props

        return(
    <div>
    <p>Last Name: {lastName}</p>
    <p>First Name: {firstName}</p>
    <p>Gender: {gender}</p>
    <p>Height: {height}</p>
    <p>Birth: {birth.toDateString()}</p>
    <img src={picture} alt={firstName}></img>
  </div>
)
}

}



export default IdCard;