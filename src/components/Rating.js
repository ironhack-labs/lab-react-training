const Rating = ({ children }) => {

    const displayStar = () => {
        let starDisplay = '';
        const star = Math.round(children)
        for (let i = 0; i < 5; i++) {
            i < star ? (starDisplay += '★') : (starDisplay += '☆');
        }
        return starDisplay;
    };

    return (
        <div>
            {displayStar()}
        </div>
    )
};

export default Rating; 