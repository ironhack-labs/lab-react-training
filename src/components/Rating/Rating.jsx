import './Rating.css'

const Rating = ({ children }) => {
    let numRound = Math.round(children)
    let starEmpty = 5 - numRound
    let whiteStar = '☆'
    let blackStar = '★'
    let star = []
    for (numRound; numRound > 0; numRound--) {
        star.push(blackStar)
    }

    for (starEmpty; starEmpty > 0; starEmpty--) {
        star.push(whiteStar)
    }

    return (
        <p>{star}</p>
    )
}

export default Rating