const Rating = (props) => {

    let stars = Math.round(props.children);
    let emptyStars = 5 - stars
    let starsArr = []

    for (stars; stars > 0; stars--) {
        starsArr.push("★")
    }
    for (emptyStars; emptyStars < 0; emptyStars--) {
        starsArr.push("☆")
    }

    return (
        <div className="starsRating">{starsArr}</div>
    );

}

export default Rating;

