const Rating = ({ children }) => {
    const child = Math.round(children)

    if (child < '1') {
        return <h1>☆☆☆☆☆</h1>
    }
    if (child < '2') {
        return <h1>★☆☆☆☆</h1>
    }
    if (child < '3') {
        return <h1>★★☆☆☆</h1>
    }
    if (child < '4') {
        return <h1>★★★☆☆</h1>
    }
    if (child < '5') {
        return <h1>★★★★☆</h1>
    }
    if (child < '6') {
        return <h1>★★★★★</h1>
    }
}

export default Rating