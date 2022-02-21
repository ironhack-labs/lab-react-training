const Rating = ({ children }) => {

    if (children >= 0 && children < 1) {
        return (
            children = "☆☆☆☆☆"
        )
    } else if (children >= 0 && children < 2) {
        return (
            children = "★☆☆☆☆"
        )
    } else if (children > 1 && children < 3) {
        return (
            children = "★★☆☆☆"
        )
    } else if (children >= 3 && children < 4) {
        return (
            children = "★★★☆☆"
        )
    } else if (children >= 4 && children < 5) {
        return (
            children = "★★★★☆"
        )
    } else if (children > 4 && children <= 5) {
        return (
            children = "★★★★★"
        )
    }
}


export default Rating