import './Rating.css'

const Rating = ({ children }) => {

    const starsNum = Math.round(children)

    // const stars = [];
    // for (let i = 0; i < 5; i++) {
    //     if (i < starsNum) {
    //         stars.push(<span className="star filled"></span>);
    //     } else {
    //         stars.push(<span className="star"></span>);
    //     }
    // }

    let stars
    if (starsNum === 0) {
        stars = "☆☆☆☆☆"
    }
    if (starsNum === 1) {
        stars = "★☆☆☆☆"
    }
    if (starsNum === 2) {
        stars = "★★☆☆☆"
    }
    if (starsNum === 3) {
        stars = "★★★☆☆"
    }
    if (starsNum === 4) {
        stars = "★★★★☆"
    }
    if (starsNum === 5) {
        stars = "★★★★★"
    }

    return (
        // <div className="star-rating">{stars}</div>
        <p>{stars}</p>
    )
}

export default Rating 