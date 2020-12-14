//Componente Tonto

//Paso I:Importaciones
import { render } from '@testing-library/react'
import React, {Component} from 'react'
import '../css/App.css'



//Paso II: Clases o Funciones 

class IdCard extends Component {

render({lastName, firstName, gender, height, birth, picture}=this.props) {
    
    return (
    <div className='cardContainer'>
        <img src={picture}/>
        <div className="infoCont">
            <p><strong>First name:</strong> {firstName}</p>
            <p><strong>Last name:</strong> {lastName}</p>
            <p><strong>Gender:</strong> {gender}</p>
            <p><strong>Height:</strong> {height}</p>
            <p><strong>Birth:</strong> {birth.toString()}</p>
        </div>
    </div>
        
    )}
    };


//Paso III:Exportaciones
export default IdCard;