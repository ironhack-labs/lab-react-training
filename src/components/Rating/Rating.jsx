function Rating({ children }) {

    const rounded = Math.round(children)
    const empty = 5 - rounded
    const stars = "★"
    const emptyStars = "☆"
    const finalText = stars.repeat(rounded) + emptyStars.repeat(empty)

    return (
        <div>
            <p>{finalText}</p>
        </div>
    )

}

export default Rating