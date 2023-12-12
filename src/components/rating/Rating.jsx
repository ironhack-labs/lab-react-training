import './rating.css';

function Rating({ children }) {
    const rounded = Math.round(children);

    const ratings = [
        '☆☆☆☆☆',
        '★☆☆☆☆',
        '★★☆☆☆',
        '★★★☆☆',
        '★★★★☆',
        '★★★★★',
    ];

    const rating = ratings[Math.min(5, Math.max(0, rounded))];

    return <h2>{rating}</h2>;
}

export default Rating;
