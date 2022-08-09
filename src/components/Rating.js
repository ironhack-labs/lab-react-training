const Rating = ({children}) => {
    const displayStar = (star) => {
        let starDisplay = '';

        for ( let i=0; i < 5; i++){
            i < star ? (starDisplay += '★') : (starDisplay += '☆');
        }
        return starDisplay;
    };




    return(
        <div>
            {displayStar(children)}

        </div>

    )
    
    };

export default Rating