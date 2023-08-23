import './Rating.css'


const Rating = ({ children }) => {

    const childrenRound = Math.round(children)

    if (childrenRound === 0) {
        return (
            <p>☆☆☆☆☆</p>
        )
    }
    if (childrenRound === 1) {
        return (
            <p>★☆☆☆☆</p>
        )
    }
    if (childrenRound === 2) {
        return (
            <p>★★☆☆☆</p>
        )
    }
    if (childrenRound === 3) {
        return (
            <p>★★★☆☆</p>
        )
    }
    if (childrenRound === 4) {
        return (
            <p>★★★★☆</p>
        )
    }
    if (childrenRound === 5) {
        return (
            <p>★★★★★</p>
        )
    }

}

export default Rating
