import './Rating.css'
const Rating = ({ children }) => {

    const roundedNum = Math.round(children)


    let stars
    if (roundedNum === 1) stars = '☆☆☆☆☆'
    if (roundedNum === 2) stars = '★☆☆☆☆'
    if (roundedNum === 3) stars = '★★☆☆☆'
    if (roundedNum === 4) stars = '★★★☆☆'
    if (roundedNum === 5) stars = '★★★★☆'
    if (roundedNum === 5) stars = '★★★★★'

    return (
        // <div className="star-rating">{stars}</div>
        <p>{stars}</p>
    )
}
export default Rating