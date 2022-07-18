import React from 'react'

export default function Rating({ children }) {

    // if ({num}.toFixed() === 0) {
    //     return '☆☆☆☆☆'
    // } else if ({num}.toFixed() === 1) {
    //     return  '★☆☆☆☆'
    // } else if ({num}.toFixed() === 2) {
    //     return  '★★☆☆☆'
    // }else if ({num}.toFixed() === 3) {
    //     return  '★★★☆☆'
    // }else if ({num}.toFixed() === 4) {
    //     return  '★★★★☆'
    // }else if ({num}.toFixed() === 5) {
    //     return  '★★★★★'
    // }

    // if (children.toFixed() === 0) {
    //     return '☆☆☆☆☆'
    // } else if (children.toFixed() === 1) {
    //     return '★☆☆☆☆'
    // } else if (children.toFixed() === 2) {
    //     return '★★☆☆☆'
    // } else if (children.toFixed() === 3) {
    //     return '★★★☆☆'
    // } else if (children.toFixed() === 4) {
    //     return '★★★★☆'
    // } else if (children.toFixed() === 5) {
    //     return '★★★★★'
    // }




    return (

        <div>
            <h3>   {Math.round(children) === 0 ? '☆☆☆☆☆' : 'error'}</h3>
            <h3>   {Math.round(children) === 1 ? '★☆☆☆☆' : 'error'}</h3>
            <h3>   {Math.round(children) === 2 ? '★★☆☆☆' : 'error'}</h3>
            <h3>   {Math.round(children) === 3 ? '★★★☆☆' : 'error'}</h3>
            <h3>   {Math.round(children) === 4 ? '★★★★☆' : 'error'}</h3>
            <h3>   {Math.round(children) === 5 ? '★★★★★' : 'error'}</h3>

            {/* <h3>   {children.toFixed() === 0 ? '★☆☆☆☆' : 'error'}</h3> */}

            {/* 為什麼toFixed不行??????????? */}


        </div>
    )


    
}

