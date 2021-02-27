const Rating = ({children}) => {
    const rating = Math.floor(children);
    let filledStars = '';
    let emptyStars = '';
    function fillStarsFunc() {
        for (let i = 0; i < rating; i++ ) {
            filledStars += '★';
        }
    }
    function emptyStarsFunc() {
        for (let i = 0; i < 5- rating; i++ ) {
            filledStars += '☆';
        }
    }
    fillStarsFunc();
    emptyStarsFunc();
    return (
       <div className="d-flex">
           <span>{filledStars}</span><span>{emptyStars}</span>
       </div>
    );
}

export default Rating;