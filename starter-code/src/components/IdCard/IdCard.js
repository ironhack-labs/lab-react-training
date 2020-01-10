import React, { Component } from 'react';
import './style.css'

class IdCard extends Component {
	dateToString = (date) => date.toDateString();
	render() {
		return (
			<div className='id-card'>
				<div className='photo'>
					<img src={this.props.picture} />
				</div>
				<div className='content'>
					<div>name: {this.props.firstName}</div>
					<div>lastName: {this.props.lastName}</div>
					<div>gender: {this.props.gender}</div>
					<div>height: {this.props.height}</div>
					<div>birth: {this.dateToString(this.props.birth)}</div>
				</div>
			</div>
		)
	}
}

export default IdCard;