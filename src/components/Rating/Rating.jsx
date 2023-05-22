import './Rating.css'

const Rating = ({ children }) => {

    const starsNum = Math.round(children)

    const stars = [];
    for (let i = 0; i < 5; i++) {
        if (i < starsNum) {
            stars.push(<span className="star filled"></span>);
        } else {
            stars.push(<span className="star"></span>);
        }
    }

    return (
        <div className="star-rating">{stars}</div>
    )
}

export default Rating 