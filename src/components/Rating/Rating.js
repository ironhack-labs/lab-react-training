const Rating = ({ children }) => {

    let stars = ""

    if (children >= 0 && children <= 0.49) {
        stars = '☆☆☆☆☆'
    } else if (children >= 0.5 && children <= 1.49) {
        stars = '★☆☆☆☆'
    } else if (children >= 1.5 && children <= 2.49) {
        stars = '★★☆☆☆'
    } else if (children >= 2.5 && children <= 3.49) {
        stars = '★★★☆☆'
    } else if (children >= 3.5 && children <= 4.49) {
        stars = '★★★★☆'
    } else if (children >= 4.5 && children <= 5) {
        stars = '★★★★★'
    }

    return (
        <>
            <span>{stars}</span>
            <br></br>
        </>
    )

}

export default Rating