import './CreditCard.css'
import visaLogo from './../../assets/visa.png'
import masterLogo from './../../assets/master-card.svg'

const CreditCard = props => {
	const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = props

	const cardStyle = {
		backgroundColor: bgColor,
		color: color,
	}

	const creditImg = type === 'Visa' ? visaLogo : masterLogo

	const numberArray = [...number]
	const secretNumber = numberArray.map((number, idx) => {
		while (idx < numberArray.length - 4) {
			if (idx % 4 === 0) {
				return ' ·'
			}
			return '·'
		}
		return number
	})

	return (
		<>
			<article className='CreditCard' style={cardStyle}>
				<img src={creditImg} alt={type} />
				<p className='number'>{secretNumber.join('')}</p>
				<p>
					Expires {expirationMonth}/{expirationYear} {bank}
				</p>
				<p>{owner}</p>
			</article>
		</>
	)
}

export default CreditCard
