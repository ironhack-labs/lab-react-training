const Rating = props => {
    const rating = Math.round(props.children)

    return (
        <h3>{"★".repeat(rating) + "☆".repeat(5 - rating)}</h3>
    )
}

export default Rating