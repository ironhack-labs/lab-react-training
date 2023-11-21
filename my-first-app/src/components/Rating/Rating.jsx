const Rating = ({ children }) => {

    const numRate = Math.round(children)


    if (numRate === 0) {
        return <p>☆☆☆☆☆</p>
    } else if (numRate === 1) {
        return <p>★☆☆☆☆</p>
    } else if (numRate === 2) {
        return <p>★★☆☆☆</p>
    } else if (numRate === 3) {
        return <p>★★★☆☆</p>
    } else if (numRate === 4) {
        return <p>★★★★☆</p>
    } else if (numRate === 5) {
        return <p>★★★★★</p>
    }
}

export default Rating