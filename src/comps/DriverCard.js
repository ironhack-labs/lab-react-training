// imports 
import React from 'react'


//components
class DriverCard extends React.Component{

    checkRating(n){
      let options = {
        0: '☆☆☆☆☆',
        1: '★☆☆☆☆',
        2: '★★☆☆☆',
        3: '★★★☆☆',
        4: '★★★★☆',
        5: '★★★★★',
      }
      let num = Math.round(n)
        return options[num];       
    }

    render(){
        const {name, rating, img, car} = this.props
        return(
            <div className='card-driver'>
                <div>
                  <img src={img} alt={name} className='img-driver'/>
                </div>
                <div className="card-driver-text">
                  <p className="card-driver-name">{name}</p>
                  <p className="card-driver-p">{this.checkRating(rating)}</p>
                  <p className="card-driver-p">{car.model} | {car.licensePlate}</p>
                </div>
            </div>
        )
        }
}


// exports
export default DriverCard;