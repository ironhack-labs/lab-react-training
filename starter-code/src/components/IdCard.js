import React from 'react'
import {IdCardStyle} from '../styles/styles'

const IdCard = ({firstName, lastName, gender, height, birth, picture}) => {
    return (
        <IdCardStyle>
            <img src={picture}></img>
        <ul>
            <li>Firstname: {firstName}</li>
            <li>Lastname: {lastName}</li>
            <li>Gender: {gender}</li>
            <li>Height: {height}</li>
        </ul>
        </IdCardStyle>
    )
}
export default IdCard
