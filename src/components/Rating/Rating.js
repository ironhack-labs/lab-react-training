import "./Rating.css"
const Rating = props => {
    const { children } = props

    let stars = ""
    let childrenRounded = Math.round(children)

    switch (childrenRounded) {
        case 1:
            stars = "★☆☆☆☆"
            break
        case 2:
            stars = "★★☆☆☆"
            break
        case 3:
            stars = "★★★☆☆"
            break
        case 4:
            stars = "★★★★☆"
            break
        case 5:
            stars = "★★★★★"
            break
    }

    return (
        <span className="rating">{stars}</span>
    )
}
export default Rating