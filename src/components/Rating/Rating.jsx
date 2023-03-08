function Rating({ children }) {
    const blackStars = Math.round(children);
    const whiteStars = 5 - blackStars;
    const starsToPaint = '★ '.repeat(blackStars) + '☆ '.repeat(whiteStars);

    return (
        <>
            <h4>{ starsToPaint }</h4>
        </>
    )
}

export default Rating;