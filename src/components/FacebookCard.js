import React, {Component} from 'react';

class FacebookCard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showDetails: false
		};
	}

	showDetails = (profile) => {
		return (
			<div>
				<ul>
					<li><strong>First Name:</strong> {profile.firstName}</li>
					<li><strong>Last Name:</strong> {profile.lastName}</li>
					<li><strong>Country:</strong> {profile.country}</li>
					<li><strong>Type:</strong> {profile.isStudent ? 'Student' : 'Teacher'}</li>
				</ul>
			</div>
		);
	};

	toggleDetails = (showDetails) => {
		let newShowDetails = showDetails;
		if (showDetails) {
			newShowDetails = false;
		} else {
			newShowDetails = true;
		}
		this.setState({showDetails: newShowDetails});
	};

	render() {
		const profileData = this.props.profileData;
		const countryClicked = this.props.countryClicked;
		let background = 'white';
		let color = 'black';
		if (countryClicked) {
			background = 'blue';
			color = 'white';
		} else {
			background = 'white';
			color = 'black';
		}
		return (
			<div className="facebook" style={{backgroundColor: background, color: color}}>
				<div>
					<img src={profileData.img}
						 onClick={() => this.toggleDetails(this.state.showDetails)}
						 alt=""/>
					{this.state.showDetails ? this.showDetails(profileData) : null}
				</div>
			</div>
		);
	}
}

export default FacebookCard;