import React, { Component } from 'react';

import IdCard from './component/idCard';
import Greetings from './component/Greetings';
import Random from './component/Random';

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
        <Random min={1} max={6}/>
        <Random min={1} max={100}/>
			</div>
		);
	}
}

export default App;
