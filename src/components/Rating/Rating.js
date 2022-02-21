
const Rating = ({ children }) => {
    
    let points = Math.floor(Number(children))
    let rating = ''

    if (points === 0) {
       rating = '☆☆☆☆☆'
    } else if (points === 1) {
        rating = '★☆☆☆☆'
    } else if (points === 2) {
        rating = '★★☆☆☆'
    } else if (points === 3) {
        rating = '★★★☆☆'
    } else if (points === 4) {
        rating = '★★★★☆'
    } else if (points === 5) {
        rating = '★★★★★'
    }
        
    return (
        <div>
            {rating}
        </div>
    )
}


export default Rating
