import './Rating.css'

const Rating = ({ children }) => {
    if (children === 0) {
        return '☆☆☆☆☆'
    } else if (
        children > 0 && children <= 1.49
    ) {
        return '★☆☆☆☆'
    } else if (
        children > 1.49 && children < 3
    ) {
        return '★★☆☆☆'
    } else if (
        children >= 3 && children < 4
    ) {
        return '★★★☆☆'
    } else if (
        children >= 4 && children < 5
    ) {
        return '★★★★☆'
    } else if (
        children === 5
    ) {
        return '★★★★★'
    }

}
export default Rating