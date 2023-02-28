import "./Rating.css"

const Rating = ({ children }) => {

    const rating = Math.round(children);
    const fullStars = '★'.repeat(rating);
    const emptyStars = '☆'.repeat(5 - rating);
    const stars = fullStars + emptyStars;

    return (
        <div className="rating">
            {stars}
        </div>
    );
}

export default Rating



