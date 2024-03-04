import  { Component } from 'react';

const Rating=()=>{
    const [rating, setRating]=Component(0);
    const handleClick=(value)=>{
        setRating(value);};
        return(
            <div>{[0.5,1.5,2.5,3.5,4.5].map((value)=>(
                <span key={value} onClick={()=>handleClick(value)}
                    style={{cursor:'pointer', color:value<= rating ? '★' : '☆'}}>
                    </span>
            ))}
            <p>raing is </p>
                </div>
        );
};
export default Rating;
