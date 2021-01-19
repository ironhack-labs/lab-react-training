import React from 'react';


function Rating(props) {
    const ratings = Math.round(props.children)
    let stars = ''  

if (ratings < 1) {
    stars = '\u2606 \u2606 \u2606 \u2606 \u2606'
 } else if (ratings < 2) {
    stars = '\u2605 \u2606 \u2606 \u2606 \u2606'
 } else if (ratings < 3) {
    stars = '\u2605 \u2605 \u2606 \u2606 \u2606'
 } else if (ratings < 4) {
    stars = '\u2605 \u2605 \u2605 \u2606 \u2606'
 } else if (ratings < 5) {
    stars = '\u2605 \u2605 \u2605 \u2605 \u2606'
 } else if (ratings >= 5) {
    stars = '\u2605 \u2605 \u2605 \u2605 \u2605'
 }
 return(
     <div style={{fontSize: "300%"}}>
         <p>{stars}</p>
     </div>
 ) 
}

export {Rating}