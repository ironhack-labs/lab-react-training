import './Rating.css'

const Rating = ({ children }) => {

    const rate = Math.round(children);

    let firstStar = rate >= 1 ? '★' : '☆'
    let secondStar = rate >= 2 ? '★' : '☆'
    let thirdStar = rate >= 3 ? '★' : '☆'
    let fourthStar = rate >= 4 ? '★' : '☆'
    let fifthStar = rate >= 5 ? '★' : '☆'

    return (
        <div className="stars">
            <p>{firstStar}</p>
            <p>{secondStar}</p>
            <p>{thirdStar}</p>
            <p>{fourthStar}</p>
            <p>{fifthStar}</p>
        </div>
    )
}

export default Rating