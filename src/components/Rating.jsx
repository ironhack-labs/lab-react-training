import './Rating.css';

const Rating = props => {
    const { children } = props
    const roundRate = Math.round(children)
    const starsRate = []

    for (let i = 0; i < 5; i++) {
        if (i < roundRate) {
            starsRate.push(<span key={i}>&#9733;</span>);
        } else {
            starsRate.push(<span key={i}>&#9734;</span>);
        }
    }

    return (
        <div className="rating">
            {starsRate}
        </div>
    )
}

export default Rating