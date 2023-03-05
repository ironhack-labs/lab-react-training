import React from 'react';
import './index.css'
// import star from '../../assets/images/star.png'
// import fillStar from '../../assets/images/fillStar.png'

function Rating(children) {
const result = ''
if(children < 0.5) {
    result = '☆☆☆☆☆'
} else if(children < 1.5) {
    result = '★☆☆☆☆'
} else if(children < 2.5) {
    result = '★★☆☆☆'
} else if(children < 3.5) {
    result = '★★★☆☆'
} else if(children < 4.5) {
    result = '★★★★☆'
} else if(children <= 5) {
    result = '★★★★★'
} 
    
    return (
        <div className='React'>
           <p>${result}</p>
        </div>
    );
};

export default Rating;