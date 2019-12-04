import React, { useEffect, useState } from 'react';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import Rating from './components/Rating';
import CreditCard from './components/CreditCard';
import Buttons from './components/Buttons';

const App = () => {
	const [ range, setRange ] = useState([]);
	const [ random, setRandom ] = useState(0);
	const [ random2, setRandom2 ] = useState(0);
	useEffect(() => {
		setRange([ { min: 1, max: 6 }, { min: 1, max: 100 } ]);
	}, []);
	useEffect(
		() => {
			setRandom(
				range[0] !== undefined
					? Math.floor(Math.random() * (range[0].max - range[0].min) + range[0].min)
					: range === [] ? 0 : ''
			);
			setRandom2(
				range[1] !== undefined
					? Math.floor(Math.random() * (range[1].max - range[1].min) + range[1].min)
					: range === [] ? 0 : ''
			);
		},
		[ range ]
	);

	return (
		<div className='App'>
			<div className='cards-container'>
				<IdCard
					lastName='Doe'
					firstName='John'
					gender='male'
					height={178}
					birth={new Date('1992-07-14')}
					picture='https://randomuser.me/api/portraits/men/44.jpg'
				/>
				<IdCard
					lastName='Delores '
					firstName='Obrien'
					gender='female'
					height={172}
					birth={new Date('1988-05-11')}
					picture='https://randomuser.me/api/portraits/women/44.jpg'
				/>
				<Greetings language='de'>Ludwig</Greetings>
				<Greetings language='fr'>Francois</Greetings>
				<Random
					res={random}
					min={range[0] !== undefined ? range[0].min : range === [] ? 0 : ''}
					max={range[0] !== undefined ? range[0].max : range === [] ? 0 : ''}
				/>
				<Random
					res={random2}
					min={range[1] !== undefined ? range[1].min : range === [] ? 0 : ''}
					max={range[1] !== undefined ? range[1].max : range === [] ? 0 : ''}
				/>
				<BoxColor r={255} g={0} b={0} a={1} />
				<BoxColor r={128} g={255} b={0} a={1} />
				<Rating rate={0} />
				<Rating rate={1} />
				<Rating rate={2} />
				<Rating rate={3} />
				<Rating rate={4} />
				<Rating rate={5} />
				<div className='CreditCardBorder'>
					<CreditCard
						type='Visa'
						number='0123456789018845'
						expirationMonth={3}
						expirationYear={2021}
						bank='BNP'
						owner='Maxence Bouret'
						bgColor='#11aa99'
						color='white'
					/>
					<CreditCard
						type='master'
						number='0123456789010995'
						expirationMonth={3}
						expirationYear={2021}
						bank='N26'
						owner='Maxence Bouret'
						bgColor='#eeeeee'
						color='#222222'
					/>
					<CreditCard
						type='Visa'
						number='0123456789016984'
						expirationMonth={12}
						expirationYear={2019}
						bank='Name of the Bank'
						owner='Firstname Lastname'
						bgColor='#ddbb55'
						color='white'
					/>
				</div>
				<Buttons />
			</div>
		</div>
	);
};

export default App;
