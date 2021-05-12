import './Rating.css'

const Rating = (props) => {
    const getStars = rating => {
        const filledStars = String.fromCharCode(0x2605).repeat(Math.round(rating));
        const emptyStars = String.fromCharCode(0x2606).repeat(5 - filledStars.length);

        return filledStars + emptyStars;

    }

    return (
        <div className="stars">
            <p>{getStars(props.children)}</p>
        </div>
    )
}

export default Rating;