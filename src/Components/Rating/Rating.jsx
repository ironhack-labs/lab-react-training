const Rating = ({ children }) => {

    let star = ""
    let num = Math.round(children)

    if (num === 0) {
        star = "☆☆☆☆☆"
    } else if (num === 1) {
        star = "★☆☆☆☆"
    } else if (num === 2) {
        star = "★★☆☆☆"
    } else if (num === 3) {
        star = "★★★☆☆"
    } else if (num === 4) {
        star = "★★★★☆"
    } else if (num === 5) {
        star = "★★★★★"
    }


        return (
            <p>{star}</p>
    )
    }

    export default Rating