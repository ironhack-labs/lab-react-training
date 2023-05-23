const Rating = ({ children }) => {
    const rating = Math.round(children);
    let starsDisplay = ['☆', '☆', '☆', '☆', '☆']

    starsDisplay = starsDisplay.map((star, i) => {
        if (i < rating) {
            return '★'
        } else {
            return '☆'
        }
    })

    return (
        <div>{starsDisplay.join('')}</div>
    )
}

export default Rating
