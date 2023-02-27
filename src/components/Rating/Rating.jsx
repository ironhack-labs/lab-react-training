import './Rating.css'


const Rating = ({ children }) => {

    const num = Math.round(children)

    let stars
    if (num === 0) stars = '✰✰✰✰✰'
    else if (num === 1) stars = '★✰✰✰✰'
    else if (num === 2) stars = '★★✰✰✰'
    else if (num === 3) stars = '★★★✰✰'
    else if (num === 4) stars = '★★★★✰'
    else if (num === 5) stars = '★★★★★'
    return (
        <div className="Rating">
            <p>{stars}</p>
        </div>
    )
}


export default Rating 