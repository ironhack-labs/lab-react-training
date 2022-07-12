import React from "react"; 
import "../components/css/Rating.css" 

const Rating = ({children}) => {
    const rating = Math.round(parseFloat(children)); 
    let stars= ''

    for (let i = 0; i < 5; i++) {
        stars.length < rating ? stars += '★' : stars += '☆';
    }

    return (
        <h3 className="starGrading">{stars}</h3>
    )
};
    
export default Rating;