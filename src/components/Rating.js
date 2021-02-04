//Paso I:Importaciones
import React, {Component} from 'react'
import '../css/App.css'



//Paso II: Clases o Funciones 

class Rating extends Component {

    getStars(rating) {
        const stars = Math.round(rating);
        let starsString = '';

        for (let index = 0; index < 5; index++) {
            if (index < stars) {
                starsString += '★';
            } else {
                starsString += '☆';
            }
        }

        return starsString;
    }
    

    render({children}=this.props) {
    
    const starts =this.getStars(children);
    return (
    
        <div className='starsRating'>
            <p> {starts}</p>
        </div>
    
        
    )}
    };


//Paso III:Exportaciones
export default Rating;