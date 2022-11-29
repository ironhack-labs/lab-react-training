import './rating.css'

const Rating = props => {
    const { children } = props

    if (children == 0) {
        console.log(children)
        return <div>☆ ☆ ☆ ☆ ☆</div>
    } else if (children > 1 && children <= 1.49) {
        return <div>★ ☆ ☆ ☆ ☆</div >
    } else if (children >= 1.50 && children <= 2) {
        return <div>★ ★ ☆ ☆ ☆</div >
    } else if (children == 3) {
        return <div>★ ★ ★ ☆ ☆</div >
    } else if (children == 4) {
        return <div>★ ★ ★ ★ ☆</div >
    } else if (children == 5) {
        return <div>★ ★ ★ ★ ★</div >
    }


}





export default Rating