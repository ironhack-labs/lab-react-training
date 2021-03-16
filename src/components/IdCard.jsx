import React from 'react'

const IdCard = (props) => {
    let style ={
        display : "flex"   }
    let styleForP={
        margin: "2px 5px",
        textAlign : "left" 
    }
    return (
        <div style={style} >
        <img src={props.picture} alt="" />
        <div>
        <p style={styleForP}>{props.lastName}</p>
        <p style={styleForP}>{props.firstName}</p>
        <p style={styleForP}>{props.gender}</p>
        <p style={styleForP}>{props.height}</p>
        <p style={styleForP}>{props.birth}</p>
        </div>
        </div>
    )
}

export default IdCard
