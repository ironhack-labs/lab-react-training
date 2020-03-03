import React, { Component } from 'react';

import IdCard from './component/idCard';
import Greetings from './component/Greetings';
import Random from './component/Random';
import BoxColor from './component/BoxColor';
import CreditCard from './component/CreditCard';

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
			</div>
		);
	}
}

export default App;
