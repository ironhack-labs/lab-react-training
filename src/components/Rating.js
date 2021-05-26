import React from 'react'
export default function Rating(props) {
    let stars = Math.round(props.children)
    let result = ''
    for(let i = 0, j = 0; i < 5; i++){
        if(j < stars){
            result += `★`
        }else{
            result += `☆`
        }
        j++;
    }
    return (
        <>
        <div style={{fontSize:'30px'}}>
            {result}
        </div>
        <br/>
        </>
    )
}