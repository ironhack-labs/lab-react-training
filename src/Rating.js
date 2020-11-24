import React from 'react';

const Rate = (props) => {
    const star= (stars)=>{
       let rate= Math.round(stars)
        let count=[];
        let empty= 5-rate
        let none=[]
        let all=[]
        for(let i=0; i<rate; i++){
            count.push('★')
        }
        for(let i=0; i<empty; i++){
            console.log(empty)
            none.push('☆')
        }
        return  count + none
    }
    return (
        <div>
        {star(props.children)}
        </div>
    )
}

export default function Rating(){
    return (
        <div>
            <Rate>0</Rate>
            <Rate>1.49</Rate>
            <Rate>1.5</Rate>
            <Rate>3</Rate>
            <Rate>4</Rate>
            <Rate>5</Rate>
            
        </div>
    )
}