import './Rating.css'



const Rating = ({ children }) => {

    const redonNumber = (children) => {
        let redon = Math.round(children)
        return redon
    }

    let redon = redonNumber(children)



    if (redon === 0) {
        return <p>☆☆☆☆☆</p>
    }

    if (redon === 1) {
        return <p>★☆☆☆☆</p>
    }

    if (redon === 2) {
        return <p>★★☆☆☆</p>
    }

    if (redon === 3) {
        return <p>★★★☆☆</p>
    }

    if (redon === 4) {
        return <p>★★★★☆</p>
    }
    if (redon === 5) {
        return <p>★★★★★</p>
    }


}

export default Rating