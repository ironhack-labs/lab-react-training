import './Rating.css'

const Rating = ({ children }) => {

    const howStars = Math.round(children)

    let stars
    if (howStars === 0) {
        stars = '☆☆☆☆☆'
    }
    else if (howStars === 1) {
        stars = '★☆☆☆☆'
    }
    else if (howStars === 2) {
        stars = '★★☆☆☆'
    }
    else if (howStars === 3) {
        stars = '★★★☆☆'
    }
    else if (howStars === 4) {
        stars = '★★★★☆'
    }
    else if (howStars === 5) {
        stars = '★★★★★'
    }

    return (
        <div className='Rating'>
            <p>{stars}</p>
        </div>
    )
}

export default Rating