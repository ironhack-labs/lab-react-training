

const Rating = ({ children }) => {

    const roundNumber = Math.round(children)


    let stars
    if (roundNumber === 0) {
        stars = "☆☆☆☆☆"
    }

    if (roundNumber === 1) {
        stars = "★☆☆☆☆"
    }
    if (roundNumber === 2) {
        stars = "★★☆☆☆"
    }
    if (roundNumber === 3) {
        stars = "★★★☆☆"
    }
    if (roundNumber === 4) {
        stars = "★★★★☆"
    }
    if (roundNumber === 5) {
        stars = "★★★★★"
    }


    return (

        <p>{stars}</p>
    )




}

export default Rating