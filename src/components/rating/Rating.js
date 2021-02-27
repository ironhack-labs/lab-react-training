const Rating = ({children}) => {
    const rating = Math.round(children);
    const emptyStars = 5 - rating;
    return (
       <div>
           {'★'.repeat(rating)}{'☆'.repeat(emptyStars)}
       </div>
    );
}

export default Rating;