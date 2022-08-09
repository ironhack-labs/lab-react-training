const Rating = ({children}) => {
    const displayStar = () => {
        let starDisplay = '';
        const value = Math.round(children);

        for ( let i=0; i < 5; i++){
            i < value ? (starDisplay += '★') : (starDisplay += '☆');
        }
        return starDisplay;
    };



    console.log(children);
    return(
        <div>
            {displayStar()}

        </div>

    )
    
    };

export default Rating