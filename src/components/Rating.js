function Rating(props) {
    const filledStars = Math.round(props.children)
    const emptyStars = 5 - filledStars
    return (
        <div>
            <span className="stars">
                {'★'.repeat(filledStars) + '☆'.repeat(emptyStars)}
            </span>
        </div>
    )
}

export default Rating;