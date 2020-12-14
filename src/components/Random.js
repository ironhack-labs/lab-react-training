//Paso I:Importaciones
import { render } from '@testing-library/react'
import React, {Component} from 'react'
import '../css/App.css'



//Paso II: Clases o Funciones 

class Random extends Component {

    getNumber(min,max) {
        return Math.floor(Math.random() * (max - min) + min);   
        }
    


    render({min, max}=this.props) {
    
    const randomNumber =this.getNumber(min,max);
    return (
    
        <div className='randomCont'>
            <p> Random value between {min} and {max} = {randomNumber}</p>
        </div>
    
        
    )}
}

//Paso III:Exportaciones
export default Random;