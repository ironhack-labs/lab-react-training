const Rating = (props) => {
    const {children} = props
    let roundedChild = Math.round(children)
    let rating = ""
    switch (roundedChild) {
        case 0:
            rating="☆☆☆☆☆"
            break;
        case 1:
            rating="★☆☆☆☆"
            break;
        case 2:
            rating="★★☆☆☆"
            break;
        case 3:
            rating="★★★☆☆"
            break;
        case 4:
            rating="★★★★☆"
            break;
        case 5:
            rating="★★★★★"
            break;

        default:
            rating="☆☆☆☆☆"
            break;
    }

    return (
        <div className="rating">
            {rating}
        </div>
    )
}

export default Rating