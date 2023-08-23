import './Rating.css'

const Rating = ({ children }) => {

    const roundedRating = Math.round(children)
    const stars = []

    for (let i = 0; i < 5; i++) {
        const star = i < roundedRating ? <span key={i}>★</span> : <span key={i}>☆</span>
        stars.push(star)
    }

    return (

        <h2 className='Rating'>{stars}</h2>
    )
}

export default Rating