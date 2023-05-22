
const Rating = ({ children }) => {

    const roundedChildren = Math.round(children)
    let stars

    if (roundedChildren < '1') {
        stars = "☆☆☆☆☆"
    }
    if (roundedChildren > '1') {
        stars = "★☆☆☆☆"
    }
    if (roundedChildren > '1.5') {
        stars = "★★☆☆☆"
    }
    if (roundedChildren > '2.5') {
        stars = "★★★☆☆"
    }
    if (roundedChildren > '3.5') {
        stars = "★★★★☆"
    }
    if (roundedChildren > '4.5') {
        stars = "★★★★★"
    }


    return <p>{stars}</p>
}

export default Rating