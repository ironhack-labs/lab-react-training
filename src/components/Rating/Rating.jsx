function Rating({ n }) {
    const stars = Math.round(n);
    const black = '★ ';
    const white = '☆ ';

    function showStars(num) {
        const sobra = 5-num;
        return (black.repeat(num) + white.repeat(sobra))
    }

    return (
        <>
            <h4>{showStars(stars)}</h4>
        </>
    )
}

export default Rating;