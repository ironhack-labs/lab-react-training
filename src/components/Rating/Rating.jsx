import EmptyStar from '../../assets/images/emptyStar.png'
import FullStar from '../../assets/images/fullStar.png'

const Rating = ({ children }) => {

    if (children < 1) {
        return (

            <div className="rating-box">
                <img src={EmptyStar} alt="" />
                <img src={EmptyStar} alt="" />
                <img src={EmptyStar} alt="" />
                <img src={EmptyStar} alt="" />
                <img src={EmptyStar} alt="" />
            </div>

        )
    }
    if (children < 1.5) {
        return (
            <div className="rating-box">
                <img src={FullStar} alt="" />
                <img src={EmptyStar} alt="" />
                <img src={EmptyStar} alt="" />
                <img src={EmptyStar} alt="" />
                <img src={EmptyStar} alt="" />
            </div>
        )
    }
    if (children < 2.5) {
        return (
            <div className="rating-box">
                <img src={FullStar} alt="" />
                <img src={FullStar} alt="" />
                <img src={EmptyStar} alt="" />
                <img src={EmptyStar} alt="" />
                <img src={EmptyStar} alt="" />
            </div>
        )
    }
    if (children < 3.5) {
        return (
            <div className="rating-box">
                <img src={FullStar} alt="" />
                <img src={FullStar} alt="" />
                <img src={FullStar} alt="" />
                <img src={EmptyStar} alt="" />
                <img src={EmptyStar} alt="" />
            </div>
        )
    }
    if (children < 4.5) {
        return (
            <div className="rating-box">
                <img src={FullStar} alt="" />
                <img src={FullStar} alt="" />
                <img src={FullStar} alt="" />
                <img src={FullStar} alt="" />
                <img src={EmptyStar} alt="" />
            </div>
        )
    }
    if (children < 5.1) {
        return (
            <div className="rating-box">
                <img src={FullStar} alt="" />
                <img src={FullStar} alt="" />
                <img src={FullStar} alt="" />
                <img src={FullStar} alt="" />
                <img src={FullStar} alt="" />
            </div>
        )
    }

}

export default Rating