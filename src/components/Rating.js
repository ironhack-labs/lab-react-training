import React from 'react';



const Rating = ({children}) => {

    const stars = () => {
        let result = [];
        for(let i = 0; i < 5; i++) {
            if(i < Math.round(children)) {
                result.push("\u2605")
            } else {
                result.push("\u2606")
            }
        }
        return result.join(' ');
    }

    const i6 = {
        fontSize: '40px',
    }
    return <div style={i6}>{stars()}</div>

}

export default Rating;