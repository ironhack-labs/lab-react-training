import React, { Component } from 'react';

class DriverCard extends Component {
    render() {
        //et rating = this.props.children;
        const { name, img, rating, car } = this.props;
        return (
            <div className='driver-card-container'>
                <div className='driver-card-image'>
                    <img className='driver-card-image' src={img} alt="diverCard"></img>
                </div>
                <div className='info-container'>
                    <div>
                        {rating >= 0.5 ? '★' : '☆'}
                        {rating >= 1.5 ? '★' : '☆'}
                        {rating >= 2.5 ? '★' : '☆'}
                        {rating >= 3.5 ? '★' : '☆'}
                        {rating >= 4.5 ? '★' : '☆'}
                    </div>
                    <p>{name}</p>
                    <div className='car-info'>
                        <p>{car.model}</p>
                        <p>{car.licensePlate}</p>
                    </div>
                </div>
            </div>
        )
    }
}


export default DriverCard;