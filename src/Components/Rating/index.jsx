import React from 'react';
import './index.css'
// import star from '../../assets/images/star.png'
// import fillStar from '../../assets/images/fillStar.png'

function Rating ({children}) {

    const chiltoNum = Number(children)
    let result = ''

    if(chiltoNum < 0.5) {
        result = '☆☆☆☆☆'
    } if(chiltoNum < 1.5 && chiltoNum >= 0.5) {
        result = '★☆☆☆☆'
    } if(chiltoNum < 2.5 && chiltoNum >= 1.5) {
        result = '★★☆☆☆'
    } if(chiltoNum < 3.5 && chiltoNum >= 2.5) {
        result = '★★★☆☆'
    } if(chiltoNum < 4.5 && chiltoNum >= 3.5) {
        result = '★★★★☆'
    } if(chiltoNum <= 5 && chiltoNum >= 4.5) {
        result = '★★★★★'
    } 
    
    
    return (
        <div className='React'>
           <p>{result}</p>
        </div>
    );
};

export default Rating;