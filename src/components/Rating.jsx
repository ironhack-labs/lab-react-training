const Rating = ({ children }) => {
    const chilrounded = Math.round(children)
    let rating = ""



    if (chilrounded === 0) {
        rating = '☆☆☆☆☆'
    }
    else if (chilrounded === 1) {
        rating = '★☆☆☆☆'
    }
    else if (chilrounded === 2) {
        rating = '★★☆☆☆'
    }
    else if (chilrounded === 3) {
        rating = '★★★☆☆'
    }

    else if (chilrounded === 4) {
        rating = '★★★★☆'
    }
    else if (chilrounded === 4) {
        rating = '★★★★★'
    }
    else if (chilrounded === 5) {
        rating = '★★★★★'
    }

    return <h2>{rating}</h2>


}













export default Rating