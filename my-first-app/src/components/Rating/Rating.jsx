const Rating = ({ children }) => {
    let value = 0

    if (Math.round(children) === 0) {
        value = "☆☆☆☆☆"
    }
    if (Math.round(children) === 1) {
        value = "★☆☆☆☆"
    }
    if (Math.round(children) === 2) {
        value = "★★☆☆☆"
    }
    if (Math.round(children) === 3) {
        value = "★★★☆☆"
    }
    if (Math.round(children) === 4) {
        value = "★★★★☆"
    }
    if (Math.round(children) === 5) {
        value = "★★★★★"
    }

    return (
        <p>  {value} </p>
    )
}

export default Rating