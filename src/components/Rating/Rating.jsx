import './Rating.css';
const Rating = (props) => {
    const rating = Math.round(props.children);
    let stars = "";
    switch (rating) {
        case 1:
            stars = "⭐☆☆☆☆";
            break;
        case 2:
            stars = "⭐⭐☆☆☆";
            break;
        case 3:
            stars = "⭐⭐⭐☆☆";
            break;
        case 4:
            stars = "⭐⭐⭐⭐☆";
            break;
        case 5:
            stars = "⭐⭐⭐⭐⭐";
            break;
        default:
            stars = "☆☆☆☆☆";
            break;
    }

    return (
        <div className="rating-container">
            {stars}
        </div>
    );
}

export default Rating;