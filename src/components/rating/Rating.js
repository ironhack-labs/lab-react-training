
function Rating({ children, max, className }) {

    const totalStars = Math.round(Number(children));
    const emptyStars = max - totalStars;

    return (
        <h2 className={`${className}`}>{'★'.repeat(totalStars)}{'☆'.repeat(emptyStars)}</h2>
    );
}

Rating.defaultProps = {
    max: 5
}

export default Rating;