import './Rating.css'

const Rating = ({ children }) => {
    let stars = ''
    switch (Math.round(children)) {
        case 0:
            stars = '☆☆☆☆☆'
            break
        case 1:
            stars = '★☆☆☆☆'
            break
        case 2:
            stars = '★★☆☆☆'
            break
        case 3:
            stars = '★★★☆☆'
            break
        case 4:
            stars = '★★★★☆'
            break
        case 5:
            stars = '★★★★★'
            break
        default:
            stars = '☆☆☆☆☆'
    }
    return (
        <article className="rating">
            <h5>{stars}</h5>
        </article>
    )
}

export default Rating