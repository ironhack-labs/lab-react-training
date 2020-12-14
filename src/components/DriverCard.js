//Paso I:Importaciones
import { render } from '@testing-library/react'
import React, {Component} from 'react'
import '../css/App.css'
import Rating from './Rating'




//Paso II: Clases o Funciones 

class DriverCard extends Component {
    

    render({name, rating, img, car}=this.props) {
    
    return (
    
        <div className='driverCont'>
            <img src={img}/>
            <div>
                <p><strong>{name}</strong> </p>
                <Rating>{rating}</Rating>
                <p>{car.model} - {car.licensePlate}</p>
            </div>
        </div>
    
        
    )}
    };


//Paso III:Exportaciones
export default DriverCard;