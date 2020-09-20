// import React from 'react';
import React, { useState } from 'react'
import './Carousel.css';

export default function Carousel(props){

    // constructor(props) {
    //     super(props)
    //     this.picsArray = props.imgs;
    //     this.indexPic = 0;
    //     this.currentPic = this.picsArray[this.indexPic]
    // }
    //     let picsArray = props.imgs;
    //     let indexPic = 0;
    //     let currentPic = picsArray[indexPic]

    // function moveCarouselRight() {
    //     // currentPic = picsArray[indexPic++]
    //     if (indexPic <= picsArray.length) {
    //          return indexPic +1;
    //     } else {
    //         return indexPic = 0;
    //     }
        
    // }

    // function moveCarouselLeft() {
    //     // currentPic = picsArray[indexPic--]
    //     if (indexPic <= picsArray.length && indexPic !== 0) {
    //         return indexPic -1;
    //     } else {
    //         return indexPic = picsArray.length;
    //     }
    // }

    //     return (
    //         <div>
    //             <button onClick={moveCarouselLeft}>Previous</button>
    //                 <img src={picsArray[indexPic]} alt="Carousel"/>
    //             <button onClick={moveCarouselRight}>Next</button>
    //         </div>
    //     )

    const [currentPic, futurePic] = useState(0)

    function moveCarouselLeft() {
        if (currentPic === 0) {
            futurePic(3)
        } else {
            futurePic(currentPic - 1)
        }
    }

    function moveCarouselRight() {
        if (currentPic === 3) {
            futurePic(0)
        } else {
            futurePic(currentPic + 1)
        }
    }

    return (
        <div className="Carousel-iteration">
            <button className="left-Carousel" onClick={moveCarouselLeft}>Previous</button>
                <img className="Carousel-img" src={props.imgs[currentPic]} alt="Carousel"/>
            <button className="right-Carousel" onClick={moveCarouselRight}>Next</button>
        </div>
    )   
        
}