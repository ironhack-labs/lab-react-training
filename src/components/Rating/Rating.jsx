import './Rating.css'
const Rating = ({ children }) => {
    const rating = Math.round(children)

    let stars
    if (rating === 0) stars = '✰✰✰✰✰'
    else if (rating === 1) stars = '★✰✰✰✰'
    else if (rating === 2) stars = '★★✰✰✰'
    else if (rating === 3) stars = '★★★✰✰'
    else if (rating === 4) stars = '★★★★✰'
    else if (rating === 5) stars = '★★★★★'

    return (
        <div className="Rating">
            <p>{stars}</p>
        </div>
    )

}

export default Rating