import React, { Component } from 'react';
import Card from './Components/Card.js';
import Greetings from './Components/Greetings.js';
import Random from './Components/Random.js';
import BoxColor from './Components/BoxColor.js';
import CreditCard from './Components/CreditCard.js';
import Rating from './Components/Rating';
import DriverCard from './Components/DriverCard';



class App extends Component {
	state = {
		users: [
			{
				lastName: 'Peters',
				firstName: 'Ana',
				gender: 'female',
				height: 1.7,
				birth: '1989-05-17',
				picture: 'https://randomuser.me/api/portraits/women/63.jpg'
			},

			{
				lastName: 'Costa',
				firstName: 'Maria',
				gender: 'female',
				height: 1.57,
				birth: '1988-02-16',
				picture: 'https://randomuser.me/api/portraits/women/32.jpg'
			}
		],
		greetings: [
			{
				lang: 'fr',
				children: 'Bonjour François'
			},
			{
				lang: 'de',
				children: 'Hallo Ludwig'
			}
		],
		randoms: [
			{
				min: 1,
				max: 6
			},
			{
				min: 1,
				max: 100
			}
		]
	};

	render() {
		return (
			<div className="App">
				<h1>Cards</h1>
				{this.state.users.map((user, index) => {
					return (
						<Card
							key={index}
							firstName={user.firstName}
							lastName={user.lastName}
							gender={user.gender}
							height={user.height}
							birth={user.birth}
							picture={user.picture}
						/>
					);
				})}
				<h1>Greetings</h1>
				{this.state.greetings.map((greeting, index) => {
					return <Greetings key={index} lang={greeting.lang} children={greeting.children} />;
				})}
				<h1>Random</h1>
				{this.state.randoms.map((random, index) => {
					return <Random key={index} min={random.min} max={random.max} />;
				})}
				<h1>Box Color</h1>
				<BoxColor />
				<BoxColor />
				<h1>Credit Cards</h1>
				<CreditCard
					type="Visa"
					number="0123456789018845"
					expirationMonth={3}
					expirationYear={2021}
					bank="BNP"
					owner="Maxence Bouret"
					bgColor="#11aa99"
					color="white"
				/>
				<CreditCard
					type="Master Card"
					number="0123456789010995"
					expirationMonth={3}
					expirationYear={2021}
					bank="N26"
					owner="Maxence Bouret"
					bgColor="#eeeeee"
					color="#222222"
				/>
				<CreditCard
					type="Visa"
					number="0123456789016984"
					expirationMonth={12}
					expirationYear={2019}
					bank="Name of the Bank"
					owner="Firstname Lastname"
					bgColor="#ddbb55"
					color="white"
				/>
				<h1>Rating</h1>
				<Rating>0</Rating>
				<Rating>1.49</Rating>
				<Rating>1.5</Rating>
				<Rating>3</Rating>
				<Rating>4</Rating>
				<Rating>5</Rating>
				<h1>Drivers Cards</h1>
				<DriverCard
					name="Travis Kalanick"
					rating={4.2}
					img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
					car={{
						model: 'Toyota Corolla Altis',
						licensePlate: 'CO42DE'
					}}
				/>
				<DriverCard
					name="Dara Khosrowshahi"
					rating={4.9}
					img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
					car={{
						model: 'Audi A3',
						licensePlate: 'BE33ER'
					}}
				/>
			</div>
		);
	}
}

export default App;
