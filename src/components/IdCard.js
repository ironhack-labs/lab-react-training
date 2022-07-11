import React from 'react'

export default function IdCard(props) {
    const date = props.birth.toLocaleString("en-GB", {
        weekday: 'short',
        month: "short",
        day: "numeric",
        year: "numeric",
    })
    console.log(date);    

  return (
    <div>
    <p>{props.firstName}</p>
    <p>{props.lastName}</p>
    <p>{props.gender}</p>
    <p>{props.height}</p>
    <p>{date}</p>
    <img src= {props.picture}/>
    </div>
  )
}
