function Rating(props) {
    const { children } = props;
    const rating = Math.round(children);
    const stars = ['☆', '☆', '☆', '☆', '☆'];
    for (let i = 0; i < rating; i++) {
        stars[i] = '★';
    }
    return (
        <div className='stars'>
            {stars.join('')}
        </div>
    )
}

export default Rating;