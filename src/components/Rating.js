import React from 'react'

const Rating = ({ children }) => {
    const addStars = () => {
        let count = [];
        for (let i = 0; i < 5; i++){
            if(i >= Math.round(children)){
                count.push('☆');
            }else{
                count.push('★');
            }
        }
        return count;
    }


    return (
        <div>
            <p>{addStars()}</p>
        </div>
    )
}

export default Rating
