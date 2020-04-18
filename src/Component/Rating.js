import React, { Component } from 'react'

class Rating extends Component{
	

	
	// roundNumber = (x) =>{
	// 	return Math.round(x);
//	}
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
		const {children} = this.props;
  	return(
			<div>
			{this.starSystem(children)}
			</div>
  	)
	}
}

export default Rating;