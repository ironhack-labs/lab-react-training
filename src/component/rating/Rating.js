import React from 'react';
import 'bulma/css/bulma.css';
import './Rating.css'

const Rating = props =>{
    const ratingNumber = Math.round(props.children)
    let stars = ''
    switch (ratingNumber){
        case 0:
            stars = '\u2606 \u2606 \u2606 \u2606 \u2606'
            break;
        case 1:
            stars = '\u2605 \u2606 \u2606 \u2606 \u2606'
            break;
        case 2:
            stars = '\u2605 \u2605 \u2606 \u2606 \u2606'
            break;
        case 3:
            stars = '\u2605 \u2605 \u2605 \u2606 \u2606'
            break
        case 4:
            stars = '\u2605 \u2605 \u2605 \u2605 \u2606'
            break;
        case 5:
            stars = '\u2605 \u2605 \u2605 \u2605 \u2605'
            break;
        default:
            stars = '\u2606 \u2606 \u2606 \u2606 \u2606'
            break;
    }
    
    return(
        <div className="card">
            <div className="card-content">
                <div className="columns is-mobile">
                    <div className="column is-12">
                        <div className="media">
                            {stars}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export {Rating}