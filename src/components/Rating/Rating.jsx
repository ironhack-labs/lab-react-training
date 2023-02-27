import './Rating.css'
import emptyStar from '../../assets/images/emptyStar.png'
import filledStar from '../../assets/images/filledStar.png'

const Rating = ({ children }) => {

    const rate = Math.round(children);

    let firstStar = rate >= 1 ? filledStar : emptyStar
    let secondStar = rate >= 2 ? filledStar : emptyStar
    let thirdStar = rate >= 3 ? filledStar : emptyStar
    let fourthStar = rate >= 4 ? filledStar : emptyStar
    let fifthStar = rate >= 5 ? filledStar : emptyStar

    return (
        <div className="stars">
            <img src={firstStar} alt="One Star" />
            <img src={secondStar} alt="Two Stars" />
            <img src={thirdStar} alt="Three Stars" />
            <img src={fourthStar} alt="Four Stars" />
            <img src={fifthStar} alt="Five Stars" />
        </div>
    )
}

export default Rating