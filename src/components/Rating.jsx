

const Rating = props => {

    const ratingnum = (Math.round(props.children))
    const fullStar = '★'
    const emptyStar = '☆'

    return (
        <p>{fullStar.repeat(ratingnum)}{emptyStar.repeat(5 - ratingnum)} </p>
    )
}

export default Rating






