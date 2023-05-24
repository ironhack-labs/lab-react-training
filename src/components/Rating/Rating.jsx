const Rating = ({ children }) => {
    if (children >= 0 && children <= 0.5) {
        return "☆☆☆☆☆"
    }
    if (children >= 0.5 && children < 1.5) {
        return "★☆☆☆☆"
    }
    if (children >= 1.5 && children < 2.5) {
        return "★★☆☆☆"
    }
    if (children >= 2.5 && children < 3.5) {
        return "★★★☆☆"
    }
    if (children >= 3.5 && children < 4.5) {
        return "★★★★☆"
    }
    if (children >= 4.5 && children <= 5) {
        return "★★★★★"
    }

}

export default Rating