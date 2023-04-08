function Rating({children}) {
    const rating = Math.ceil(children)

    function stars(fullStars) {
        return ("\u2605").repeat(fullStars) + ("\u2606").repeat(5 - fullStars)
    }
    return (
        <div className="starsDiv">
            <p className="stars">{stars(rating)}</p>
        </div>
    )
}

export default Rating;