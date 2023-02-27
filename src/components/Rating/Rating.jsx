import './Rating.css'
const Rating = ({ children }) => {
    const NumberStars = Math.round(children)
    const NumberEmpty = 5 - NumberStars
    const star = '★'
    const emptystar = '✰'
    const message = `${star.repeat(NumberStars)}${emptystar.repeat(NumberEmpty)}`
    return <h1 className="stars">{message}</h1>
}

export default Rating