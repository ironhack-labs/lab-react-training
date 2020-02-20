import React from 'react'
import Raiting from './Raiting'


function DriveCard(props) {
    let propsChildren=0
    if(props.children>=Math.floor(props.children)+.5 && props.children<5 && props.children>0){
         propsChildren = Math.ceil(props.children)
            console.log(propsChildren)
    }else{
        propsChildren= Math.floor(props.children)
        console.log(propsChildren)
    
    }
        let stars = ['☆','☆','☆','☆','☆']
    
        for(let i =0; i<propsChildren;i++){
            stars[i]='★'
        }
    return (
        <div style={{
            border:"solid 1px black",
            display:"flex",
            flexFlow :"column wrap",
            alignItems:"center",
            backGroundColor:"rgb(0,0,255)",
            borderRadius:"15px"


        }}>
        <img  src={props.img}  style={{
            width:"15% "}} />
        <div >
          <h2>{props.name}</h2>
          <Raiting>{props.raiting}</Raiting>
          <p>{props.car.model} - {props.car.licensePlate}</p>
        </div>
        </div>
    )
}

export default DriveCard
