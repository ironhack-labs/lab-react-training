
const Rating = ({ children }) => {

    let rating
    switch (children) {
        case 0:
            rating = "★"
            break;
        case 1:
            rating = "★★"
            break;
        case 2:
            rating = "★★★"
            break;
        case 3:
            rating = "★★★★"
            break;
        case 4:
            rating = "★★★★★"
        default:
            break;
    }

    return (

        <article>
            <p>{rating} {children}</p>
        </article>

    )

}

export default Rating