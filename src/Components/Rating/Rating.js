import emptyStar from '../../assets/images/emptyStar.png'
import fullStar from '../../assets/images/fullStar.png'
import './Rating.css'
function Rating({children}) {
    if(children < 1) {
        return(
            <div className="rating__container">
                <img src={emptyStar} className='rating__star' alt="emptyStar" />
                <img src={emptyStar} className='rating__star' alt="emptyStar" />
                <img src={emptyStar} className='rating__star' alt="emptyStar" />
                <img src={emptyStar} className='rating__star' alt="emptyStar" />
                <img src={emptyStar} className='rating__star' alt="emptyStar" />
            </div>
        )
    }
    if(children < 1.5) {
        return(
            <div className="rating__container">
                <img src={fullStar} className='rating__star' alt="fullstar" />
                <img src={emptyStar} className='rating__star' alt="emptyStar" />
                <img src={emptyStar} className='rating__star' alt="emptyStar" />
                <img src={emptyStar} className='rating__star' alt="emptyStar" />
                <img src={emptyStar} className='rating__star' alt="emptyStar" />
            </div>
        )
    }
    if(children >= 1.5 && children < 2.5) {
        return(
            <div className="rating__container">
                <img src={fullStar} className='rating__star' alt="fullstar" />
                <img src={fullStar} className='rating__star' alt="fullstar" />
                <img src={emptyStar} className='rating__star' alt="emptyStar" />
                <img src={emptyStar} className='rating__star' alt="emptyStar" />
                <img src={emptyStar} className='rating__star' alt="emptyStar" />
            </div>
        )
            
    }
    if(children >= 2.5 && children < 3.5) {
        return(
            <div className="rating__container">
                <img src={fullStar} className='rating__star' alt="fullstar" />
                <img src={fullStar} className='rating__star' alt="fullstar" />
                <img src={fullStar} className='rating__star' alt="fullstar" />
                <img src={emptyStar} className='rating__star' alt="emptyStar" />
                <img src={emptyStar} className='rating__star' alt="emptyStar" />
            </div>
        )
            
    }
    if(children >= 3.5 && children < 4.5) {
        return(
            <div className="rating__container">
                <img src={fullStar} className='rating__star' alt="fullstar" />
                <img src={fullStar} className='rating__star' alt="fullstar" />
                <img src={fullStar} className='rating__star' alt="fullstar" />
                <img src={fullStar} className='rating__star' alt="fullstar" />
                <img src={emptyStar} className='rating__star' alt="emptyStar" />
            </div>
        )
            
    }
    if(children >= 4.5) {
        return(
            <div className="rating__container">
                <img src={fullStar} className='rating__star' alt="fullstar" />
                <img src={fullStar} className='rating__star' alt="fullstar" />
                <img src={fullStar} className='rating__star' alt="fullstar" />
                <img src={fullStar} className='rating__star' alt="fullstar" />
                <img src={fullStar} className='rating__star' alt="fullstar" />
            </div>
        )
            
    }
}
    


export default Rating;