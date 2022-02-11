import './Rating.css';

export default function Rating(props) {
    const roundedRating = Math.round(props.children);
    const stars = [];

    for (let i = 0; i < 5; i++) {
        if (i < roundedRating) {
            stars.push(<span key={ i } className="rating-star-filled">&#9733;</span>);
        } else {
            stars.push(<span key={ i } className="rating-star">&#9734;</span>);
        }
    }

    return (
        <div className="rating">
            {stars}
        </div>
    );
}