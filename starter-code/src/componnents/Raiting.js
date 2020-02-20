import React from 'react'

function Raiting(props) {
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
        <div>
            {stars}
        </div>
    )
}

export default Raiting











