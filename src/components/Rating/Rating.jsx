import './Rating.css'

const Rating = props => {

    const { children } = props

    const blackStars = Math.round(children)
    const whiteStars = 5 - blackStars

    const stars = '★'.repeat(blackStars) + '☆'.repeat(whiteStars)

    return (
        <div className="card">
            <p className='stars'>{stars}</p>
        </div>
    )
}

export default Rating