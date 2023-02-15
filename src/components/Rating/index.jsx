function Rating(props) {
    const { children } = props;
    const numStars = Math.round(children);
    const fullStars = '★'.repeat(numStars);
    const emptyStars = '☆'.repeat(5 - numStars);
    const stars = fullStars + emptyStars;
    return <div>{stars}</div>;
}

export default Rating;