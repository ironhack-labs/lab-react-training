const Rating = (props) => {

    const { children } = props

    let starsRating = ''
    let roundedNum = Math.round(children)
    switch (roundedNum) {
        case 0:
            starsRating = '☆☆☆☆☆'
            break;

        case 1:
            starsRating = '★☆☆☆☆'
            break;
        case 2:
            starsRating = '★★☆☆☆'
            break;
        case 3:
            starsRating = '★★★☆☆'
            break;
        case 4:
            starsRating = '★★★★☆'
            break;
        case 5:
            starsRating = '★★★★★'
    }

    return (
        <p>{starsRating}</p>
    )
}

export default Rating