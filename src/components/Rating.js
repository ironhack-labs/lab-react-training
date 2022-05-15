export default function Rating(props) {
    const {children} = props
    let rating = Math.round(children)
    let stars;
    switch (rating) {
        case 0:
            stars="☆☆☆☆☆"
            break;
        case 1:
            stars="★☆☆☆☆"
            break;
        case 2:
            stars="★★☆☆☆"
            break;
        case 3:
            stars="★★★☆☆"
            break;
        case 4:
            stars="★★★★☆"
            break;
        case 5:
            stars="★★★★★"
            break;

        default:
            stars="☆☆☆☆☆"
            break;
    }

    return (
        <div className="stars">
            <p>{stars}</p>
        </div>
    )
}