import React from 'react'

export default function Random(props) {
    const min = Math.ceil(props.min);  
    const max = Math.floor(props.max);  
    const random =Math.floor(Math.random() * (max - min) + min);
    return (
        <div>
            <div className="box">
                <p>
                    Random value between {props.min} and {props.max} => {random}
                </p>
            </div>
        </div>
    )
}
