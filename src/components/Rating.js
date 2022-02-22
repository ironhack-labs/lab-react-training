const Rating = ({ children }) => {

    if (Math.round(children) === 0) {
        children = '☆☆☆☆☆'
    }
    if (Math.round(children) === 1) {
        children = '★☆☆☆☆'
    }
    if (Math.round(children) === 2) {
        children = '★★☆☆☆'
    }
    if (Math.round(children) === 3) {
        children = '★★★☆☆'
    }
    if (Math.round(children) === 4) {
        children = '★★★★☆'
    }
    if (Math.round(children) === 5) {
        children = '★★★★★'
    }

    return (
        <>
            <p>{children}</p>
        </>
    )
}

export default Rating