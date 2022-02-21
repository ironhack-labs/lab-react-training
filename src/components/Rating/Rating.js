import "./Rating.css"
const Rating = props => {
    const { children } = props

    let childrenRounded = Math.round(children)

    const arr = ["☆☆☆☆☆", "★☆☆☆☆", "★★☆☆☆", "★★★☆☆", "★★★★☆", "★★★★★"]

    return (
        <span className="rating">{arr[childrenRounded]}</span>
    )
}
export default Rating