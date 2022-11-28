import './Rating.css';
const Rating = props => {
    const { children } = props
    const Rate = Math.round(children)
    const starRate = []
    for (let i = 0; i < 5; i++) {
        if (i < Rate) {
            starRate.push(<span key={i} className="star-filled">&#9733;</span>);
        } else {
            starRate.push(<span key={i} className="rating-star">&#9734;</span>);
        }
    }
    return (
        <div className="rating">
            {starRate}
        </div>
    )
}
export default Rating