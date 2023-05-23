
const Rating = ({ children }) => {

    if (children === 0) {
        return '☆☆☆☆☆'
    } else if (children > 0 && children <= 1.49) {
        return '★☆☆☆☆'
    } else if (children > 1.49 && children <= 2.49) {
        return '★★☆☆☆'
    } else if (children >= 2.5 && children <= 3.49) {
        return '★★★☆☆'
    } else if (children >= 3.5 && children <= 4.49) {
        return '★★★★☆'
    } else if (children >= 4.5) {
        return '★★★★★'
    }
}

export default Rating;