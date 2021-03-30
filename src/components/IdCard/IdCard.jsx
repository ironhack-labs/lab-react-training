import React from 'react';
import './IdCard.scss'

const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {

    const formatDate = (date) => {
        const Months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Nomviembre', 'Diciembre']
        return `${ birth.getDate() } ${ Months[birth.getMonth()] } ${ birth.getFullYear() }`
    }

    return (
        <div className="IdCard">
            <div className="image">
                <img src={picture} alt="" />
            </div>
            <div className="cardText">
                <span><b>First Name: </b> { firstName }</span>
                <span><b>Last Name: </b> { lastName }</span>
                <span><b>Gender: </b> { gender }</span>
                <span><b>Height: </b> { height }</span>
                <span><b>Birth: </b>{ formatDate(birth) }</span>
            </div>
        </div>
    )
}

export default IdCard