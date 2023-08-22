const Rating = ({ children }) => {

    const roundedRating = Math.round(children);
    let countStars;

    if (roundedRating === 0) {
        countStars = "☆☆☆☆☆";
    } else if (roundedRating === 1) {
        countStars = "★☆☆☆☆";
    } else if (roundedRating === 2) {
        countStars = "★★☆☆☆";
    } else if (roundedRating === 3) {
        countStars = "★★★☆☆";
    } else if (roundedRating === 4) {
        countStars = "★★★★☆";
    } else if (roundedRating >= 5) {
        countStars = "★★★★★";
    }

    return (
        <div>
            {countStars}
        </div>
    )
}

export default Rating