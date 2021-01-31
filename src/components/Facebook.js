import React, {Component} from 'react';
import profiles from '../data/berlin.json';
import './Facebook.css';
import FacebookCard from './FacebookCard';

class Facebook extends Component {
	constructor(props) {
		super(props);
		this.state = {
			countryClicked: ''
		};
	}


	render() {
		const countries = [...new Set([...profiles].map(item => item.country))];
		const countryList = countries.map(country => {
			return <button
				className="country-button"
				onClick={() => this.setState({countryClicked: country})}>{country}</button>;
		});


		const facebookProfiles = profiles.map(item => {
			const country = item.country;
			const countryClicked = this.state.countryClicked;
			return (
				<FacebookCard profileData={item}
							  countryClicked={country === countryClicked ? true : false}/>
			);
		});
		return (
			<div>
				{countryList}
				{facebookProfiles}
			</div>
		);
	}
}

export default Facebook;