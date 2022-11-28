const Rating = props => {

    let roundedRating = Math.round(props.children)
    let fullStar = '★'
    let emptyStar = '☆'


    return (
        <p>{fullStar.repeat(roundedRating)}{emptyStar.repeat(5 - roundedRating)}</p>
    )

}

export default Rating
