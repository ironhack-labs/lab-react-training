import React from "react";
// import "../styles/Rating.css";

const Rating = (props) => {
    function stars(note) {
        /*
round
pour chaque 1 = 1 étoile noire
tant que moins que 5 étoiles -> +1 étoile blanche
        */
       let rating = Math.round(note);
       let text = ''; 
       for (let i = 0; i < rating; i++) {
           text+='★';
       }
       while (text.length < 5) {
        text+='☆';
       }
    return text;
    }

    return (
<div>
    {stars(props.children)}
</div>
    )
};

export default Rating;