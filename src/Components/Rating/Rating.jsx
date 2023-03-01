import './Rating.css'

const Rating = ({ children }) => {

    let stars

    const number = Math.round(children)

    if (number === 0) { stars = '☆☆☆☆☆' }
    else if (number === 1) { stars = '★☆☆☆☆' }
    else if (number === 2) { stars = '★★☆☆☆' }
    else if (number === 3) { stars = '★★★☆☆' }
    else if (number === 4) { stars = '★★★★☆' }
    else if (number === 5) stars = '★★★★★'

    return (

        <div className='Rating'>
            <p>{stars}</p>
        </div>

    )
}

export default Rating