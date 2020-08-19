import React from 'react';
import './IdCard.css'

//Iteration 1
function IdCard (props){
    return (
        <table>
            <tr>
                <td width = "20%"><img src= {props.picture} alt= "myImage"></img></td>
                <td width = "80%">
                <p><strong>First name:</strong> {props.firstName}</p>
                <p><strong>Last name:</strong> {props.lastName}</p>
                <p><strong>Gender:</strong> {props.gender}</p>
                <p><strong>Height:</strong> {props.height}</p>
                <p><strong>Birth:</strong> {props.birth}</p>
                </td>
            </tr>
        </table>
     
      )
}

export default IdCard