import React from 'react';

const Rating = ({children}) => {

    const stars = () => {
        switch (true) {
            case children < 0.5:
                return '☆☆☆☆☆'
                break;
            case children >= 0.5 && children < 1.5: 
                return '★☆☆☆☆'
                break;
            case children >= 1.5 && children < 2.5:
                return '★★☆☆☆'
                break;
            case children >= 0.5 && children < 3.5:
                return '★★★☆☆'
                break;
            case children >= 0.5 && children < 4.5:
                return '★★★★☆'
                break;
            case children >= 4.5:
                return '★★★★★'
                break;
            default:
                return 'No rating' 
        }
    }

    return (
        <div style={{fontSize: '2rem'}}>
           {stars()}
        </div>
    )
}

export default Rating;
