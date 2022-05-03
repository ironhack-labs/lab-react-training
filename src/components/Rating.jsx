import star from '../assets/images/star.png'
import emptystar from '../assets/images/emptystar.png'

import './Rating.css'

const Rating = ({children}) => {
    let rounded = Math.round(children)
    if (rounded===0){
        return(
            <div className="rating">
            <img src={emptystar} alt=""/>
            <img src={emptystar} alt=""/>
            <img src={emptystar} alt=""/>
            <img src={emptystar} alt=""/>
            <img src={emptystar} alt=""/>
            </div>
        )
    } else if (rounded===1){
        return(
            <div className="rating">
            <img src={star} alt=""/>
            <img src={emptystar} alt=""/>
            <img src={emptystar} alt=""/>
            <img src={emptystar} alt=""/>
            <img src={emptystar} alt=""/>
            </div>
        )
    } else if (rounded===2){
        return(
            <div className="rating">
            <img src={star} alt=""/>
            <img src={star} alt=""/>
            <img src={emptystar} alt=""/>
            <img src={emptystar} alt=""/>
            <img src={emptystar} alt=""/>
            </div>
        )
    } else if (rounded===3){
        return(
            <div className="rating">
            <img src={star} alt=""/>
            <img src={star} alt=""/>
            <img src={star} alt=""/>
            <img src={emptystar} alt=""/>
            <img src={emptystar} alt=""/>
            </div>
        )
    } else if (rounded===4){
        return(
            <div className="rating">
            <img src={star} alt=""/>
            <img src={star} alt=""/>
            <img src={star} alt=""/>
            <img src={star} alt=""/>
            <img src={emptystar} alt=""/>
            </div>
        )
    } else if (rounded===5){
        return(
            <div className="rating">
            <img src={star} alt=""/>
            <img src={star} alt=""/>
            <img src={star} alt=""/>
            <img src={star} alt=""/>
            <img src={star} alt=""/>
            </div>
        )
    }
}

export default Rating