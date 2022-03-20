import './Rating.css';

const Rating = (props) => {
    const whiteStar = '☆';
    const blackStar = '★';

    const blackStars = Math.round(props.children);
    const whiteStars = 5 - blackStars;

    const rating = `${blackStar.repeat(blackStars)}${whiteStar.repeat(whiteStars)}`;

    return (
        <p>{rating}</p>
    )
};

export default Rating;