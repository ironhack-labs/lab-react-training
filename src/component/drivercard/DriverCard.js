import React from 'react';
import 'bulma/css/bulma.css';
import './DriverCard.css'


const DriverCard = props =>{
    let name = props.name
    let rating = Math.round(props.rating)
    let img = props.img
    let car = props.car

    let stars = ''
    switch (rating){
        case 0:
            stars = '\u2606 \u2606 \u2606 \u2606 \u2606'
            break;
        case 1:
            stars = '\u2605 \u2606 \u2606 \u2606 \u2606'
            break;
        case 2:
            stars = '\u2605 \u2605 \u2606 \u2606 \u2606'
            break;
        case 3:
            stars = '\u2605 \u2605 \u2605 \u2606 \u2606'
            break
        case 4:
            stars = '\u2605 \u2605 \u2605 \u2605 \u2606'
            break;
        case 5:
            stars = '\u2605 \u2605 \u2605 \u2605 \u2605'
            break;
        default:
            stars = '\u2606 \u2606 \u2606 \u2606 \u2606'
            break;
    }
    
    return (
        <div className="card card-driver">
           <div className="card-content">
                <div className="columns is-mobile">
                    <div className="column is-2 is-offset-3">
                        <div className="media">
                            <div className="media-left"> 
                                <figure className="image is-96x96"><img className='is-rounded' src={img} alt='card brand'/></figure>
                            </div>
                        </div>
                    </div>
                    <div className="column is-6 has-text-left">
                        <p className='bigText'>{name}</p>
                        <p>{stars}</p>
                        <p>{car.model} - {car.licensePlate}</p>
                    </div>
                </div>
            </div>
        </div>
    )

}

export {DriverCard}