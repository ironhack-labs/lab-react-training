const Rating = ({ children }) => {

    let stars = Math.round(children)

    switch (stars) {
        case 0:
            stars = '☆☆☆☆☆'
            break;

        case 1:
            stars = '★☆☆☆☆'
            break;

        case 2:
            stars = '★★☆☆☆'
            break;

        case 3:
            stars = '★★★☆☆'
            break;

        case 4:
            stars = '★★★★☆'
            break;

        case 5:
            stars = '★★★★★'
            break;

        default:
            break;
    }

    return (
        <p>{stars}</p>
    )
}

export default Rating