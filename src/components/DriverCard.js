import React from 'react';

class DriverCard extends React.Component {
    render(){
        const {name, rating, img} = this.props
        const {model,licensePlate} = this.props.car
        const countStars =((rate)=>{
            switch(Math.round(rate)){
                case 0: 
                return (`☆☆☆☆☆`)
                case 1:
                return (`★☆☆☆☆`)
                case 2:
                return (`★★☆☆☆`)
                case 3:
                return (`★★★☆☆`)
                case 4:
                return (`★★★★☆`)
                case 5:
                return (`★★★★★`)
                default:
                return('error')
            }
        })
        const divStyle={width:`150px`, borderRadius: `50%`}
        return (
            <div>
            <img src={img} alt={name} style={divStyle}/>
            <p>{name}</p>
            <p>{countStars(rating)}</p>
            <p>{model}{licensePlate}</p>
            </div>
      );
    }
  }
  
  export default DriverCard;