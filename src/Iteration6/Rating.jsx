const Rating = ({ children }) => {
    let starts

    if (Math.round( children ) === 0) {
        starts = '☆☆☆☆☆'
    } else if (Math.round( children ) === 1) {
        starts = '★☆☆☆☆'
    } else if (Math.round( children ) === 2) {
        starts = '★★☆☆☆'
    } else if (Math.round( children ) === 3) {
        starts = '★★★☆☆'
    } else if (Math.round( children ) === 4) {
        starts = '★★★★☆'
    } else if (Math.round( children ) === 5) {
        starts = '★★★★★'
    }

    return (
        <div>
            <p>The rating is: {children} | {starts}</p>
        </div>

    )
}

export default Rating