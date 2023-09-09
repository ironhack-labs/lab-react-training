import '../styles/Rating.css'

const emptyStar = 'https://clipart-library.com/img/2184573.png'
const fullStar = 'https://clipart-library.com/img/1279251.png'

function Rating(props) {
    
    function inInterval(number, min, max) {
        if(min <= number && number < max) {
            return true
        }
        else {
            return false
        }
    }
    
    return (
        <div className='Rating'>
            {props.children<0.5 && <div className='div-stars'><img src={emptyStar} alt='empty star'/><img src={emptyStar} alt='empty star'/><img src={emptyStar} alt='empty star'/><img src={emptyStar} alt='empty star'/><img src={emptyStar} alt='empty star'/></div>}
            {inInterval(props.children, 0.5, 1.5) && <div className='div-stars'><img src={fullStar} alt='full star'/><img src={emptyStar} alt='empty star'/><img src={emptyStar} alt='empty star'/><img src={emptyStar} alt='empty star'/><img src={emptyStar} alt='empty star'/></div>}
            {inInterval(props.children, 1.5, 2.5) && <div className='div-stars'><img src={fullStar} alt='full star'/><img src={fullStar} alt='full star'/><img src={emptyStar} alt='empty star'/><img src={emptyStar} alt='empty star'/><img src={emptyStar} alt='empty star'/></div>}
            {inInterval(props.children, 2.5, 3.5) && <div className='div-stars'><img src={fullStar} alt='full star'/><img src={fullStar} alt='full star'/><img src={fullStar} alt='full star'/><img src={emptyStar} alt='empty star'/><img src={emptyStar} alt='empty star'/></div>}
            {inInterval(props.children, 3.5, 4.5) && <div className='div-stars'><img src={fullStar} alt='full star'/><img src={fullStar} alt='full star'/><img src={fullStar} alt='full star'/><img src={fullStar} alt='full star'/><img src={emptyStar} alt='empty star'/></div>}
            {4.5 <= props.children && <div className='div-stars'><img src={fullStar} alt='full star'/><img src={fullStar} alt='full star'/><img src={fullStar} alt='full star'/><img src={fullStar} alt='full star'/><img src={fullStar} alt='full star'/></div>}
        </div>
    )
}

export default Rating