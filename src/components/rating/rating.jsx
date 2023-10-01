import "./rating.css";

function RatingStars({ children }) {
    const randomValue = Math.round(parseFloat(children));
    const adjustedValue = Math.min(5, Math.max(0, randomValue));
    const stars = Array(5).fill('☆');

    for (let i = 0; i < adjustedValue; i++) {
        stars[i] = '★';
    }

    return (
        <div clasName="starsRow">
            {stars.map((stars, index) => (
                <span key={index}>{stars}</span>
            ))}
        </div>
    );
}

export default RatingStars;