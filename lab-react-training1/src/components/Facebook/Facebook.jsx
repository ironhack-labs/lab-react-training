import { useState } from 'react'
import profilesArray from './../../data/berlin.json'
import './Facebook.css'

const Facebook = () => {
	let highlighted = false
	const profiles = [...profilesArray]

	const [highlightedCountry, setHiglightedCountry] = useState('none')

	const highlightCountry = country => {
		setHiglightedCountry(country)
	}

	return (
		<div className='Facebok'>
			<button onClick={() => highlightCountry('England')}>England</button>
			<button onClick={() => highlightCountry('USA')}>USA</button>
			<button onClick={() => highlightCountry('Malaysia')}>Malaysia</button>
			<button onClick={() => highlightCountry('France')}>France</button>
			<button onClick={() => highlightCountry('Italy')}>Italy</button>
			<button onClick={() => highlightCountry('Germany')}>Germany</button>
			<button onClick={() => highlightCountry('Russia')}>Russia</button>
			<button onClick={() => highlightCountry('Scotland')}>Scotland</button>
			<button onClick={() => highlightCountry('Catalonia')}>Catalonia</button>
			<button onClick={() => highlightCountry('Kazakhstan')}>Kazakhstan</button>
			{profiles.map(({ firstName, lastName, img, country }) => {
				return (
					<div
						className='profile frame'
						style={{
							backgroundColor: country === highlightedCountry ? 'blue' : 'white',
						}}>
						<img src={img} alt={firstName} />
						<ul>
							<li>
								<strong>First name: </strong>
								{firstName}
							</li>
							<li>
								<strong>Last name: </strong>
								{lastName}
							</li>
							<li>
								<strong>Country: </strong>
								{country}
							</li>
						</ul>
					</div>
				)
			})}
		</div>
	)
}

export default Facebook
