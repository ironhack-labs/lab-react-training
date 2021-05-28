import React from 'react'

export default function Random(props) {

    function random(max, min){
        return Math.floor(Math.random() * (max - min) + min)

    }

    console.log(random)
    return (
        <div class='border border-dark m-4 p-2'>
            random value between {props.min} and {props.max} {'=>'} {random(props.max, props.min)}
        </div>
    )
}
