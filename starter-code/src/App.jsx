import React, { Component } from 'react';

import IdCard from './component/idCard';
import Greetings from './component/Greetings';
import Random from './component/Random';
import BoxColor from './component/BoxColor';
import CreditCard from './component/CreditCard';
import Rating from './component/Rating';
import DriverCard from './component/DriveCar';
import LikeButton from './component/likeButton';
import ClickablePicture from './component/ClickablePicture';

class App extends Component {
	render() {
		return (
			<div className="App">
				<h1>IdCard</h1>
				<IdCard
					lastName="Doe"
					firstName="John"
					gender="male"
					height={178}
					birth={new Date('1992-07-14')}
					picture="https://randomuser.me/api/portraits/men/44.jpg"
				/>
				<IdCard
					lastName="Delores "
					firstName="Obrien"
					gender="female"
					height={172}
					birth={new Date('1988-05-11')}
					picture="https://randomuser.me/api/portraits/women/44.jpg"
				/>
				{/* TODO: Use the IdCard component */}
				<h1>Greetings</h1>
				<Greetings lang="de"> Ludwig</Greetings>
				<Greetings lang="fr"> François</Greetings>
				{/* TODO: Use the Greetings component */}
				<h1>Random</h1>
				<Random min={1} max={6} />
				<Random min={1} max={100} />
				<h1>BoxColor</h1>
				<BoxColor r={123} g={123} b={251} />
				<BoxColor r={128} g={215} b={121} />
				<h1>CreditCard</h1>
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
				<Rating>5</Rating>
				<Rating>3</Rating>
				<Rating>2.1</Rating>
				<Rating>2.9</Rating>
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
				<LikeButton /> <LikeButton />
				<ClickablePicture
					img="/img/persons/maxence.png"
					imgClicked="/img/persons/maxence-glasses.png"
				/>
			</div>
		);
	}
}

export default App;
