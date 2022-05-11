import "./styles.css"

const Rating = (props) => {
    const {children} = props

    const rating = Math.round(children)
    const stars = "★".repeat(rating)+"☆".repeat(5-rating)

    return (
        <div className="rating">
            {stars}
        </div>
    )
}

export default Rating