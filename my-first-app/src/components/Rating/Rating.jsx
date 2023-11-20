import './Rating'

const Rating = ({ children }) => {
    let rate = Math.floor(children)
    switch (rate) {
        case 0: return (<p>☆☆☆☆☆</p>)
        case 1: return (<p>★☆☆☆☆</p>)
        case 2: return (<p>★★☆☆☆</p>)
        case 3: return (<p>★★★☆☆</p>)
        case 4: return (<p>★★★★☆</p>)
        case 5: return (<p>★★★★★</p>)
    }
}

export default Rating