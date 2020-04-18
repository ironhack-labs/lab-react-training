import React, { Component } from 'react'

class DriverCard extends Component{
	starSystem = (x) => {
		let num =	Math.round(x);
		let output = '';
		switch (num){
			case 0 :
				output = '☆☆☆☆☆'
				break;
			case 1 :
					output = '★☆☆☆☆'
					break;
			case 2 :
					output = '★★☆☆☆'
					break;	
			case 3 :
					output = '★★★☆☆'
					break; 	
			case 4 :
					output = '★★★★☆'
					break;
			case 5 :
					output = '★★★★★'
					break;		
			default:
					output = '☆☆☆☆☆';
					break;
	}
	return output;
}
	render(){
		const { name, rating, img, car } = this.props;
		return(
			<div className='uber-driver'>
				<img className='uber' src={img} alt=''></img>
				<div>
				<p>{name}</p>
				<p>{this.starSystem(rating)}</p>
			<p>{car.model} - {car.licensePlate}</p>
				</div>
			</div>
		)
	}

}

export default DriverCard;