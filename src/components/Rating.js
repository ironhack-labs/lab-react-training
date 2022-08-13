import './Ratings.css'

function Rating (props) {
    const { children } = props;

    const displayStar = (rating) => {
    let starDisplay = '';
    
    for ( let i=0; i < 5; i++){
        i < Math.round(rating) ? (starDisplay += '★') : (starDisplay += '☆');
    }
    return starDisplay;
    };

    return(
        <div className='stars'>
            {displayStar(children)}
        </div>
    )
}
export default Rating;