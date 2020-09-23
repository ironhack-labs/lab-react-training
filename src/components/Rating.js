import React from 'react'

export default function Rating(props) {
    console.log(props.children)
    return (
        <div>
           {props.children >= 0.5 ? '★' : '☆'} 
           {props.children >= 1.5 ? '★': '☆'} 
           {props.children >= 3 ? '★' : '☆'} 
           {props.children >= 4 ? '★' : '☆'} 
           {props.children >= 5 ? '★' : '☆'} 
        </div>
    )
}
