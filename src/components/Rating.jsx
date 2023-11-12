function Rating(props) {
    let emptyStar = "☆";
    let fullStar = "★";

    let countStars = Math.round(props.stars);

    return (
        <div>
            {countStars == 0 ? <p>{emptyStar}{emptyStar}{emptyStar}{emptyStar}{emptyStar}</p> : null}
            {countStars == 1 ? <p>{fullStar}{emptyStar}{emptyStar}{emptyStar}{emptyStar}</p> : null}
            {countStars == 2 ? <p>{fullStar}{fullStar}{emptyStar}{emptyStar}{emptyStar}</p> : null}
            {countStars == 3 ? <p>{fullStar}{fullStar}{fullStar}{emptyStar}{emptyStar}</p> : null}
            {countStars == 4 ? <p>{fullStar}{fullStar}{fullStar}{fullStar}{emptyStar}</p> : null}
            {countStars == 5 ? <p>{fullStar}{fullStar}{fullStar}{fullStar}{fullStar}</p> : null}
        </div>
    )
}

export default Rating;