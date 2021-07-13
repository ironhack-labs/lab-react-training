import React from 'react';

function Rating({ children }) {
    let stars = "";
    if (children === 1) {
      stars = "*";
    } else if (children === 2) {
      stars = "**";
    } else if (children === 3) {
        stars = "***";
    } else if (children === 4) {
        stars = "****";
    } else if (children === 5) {
        stars = "*****";
    
    return <div>{stars}</div>;
    }

export default Rating;