import React from 'react'

export default function Rating(props) {
    function round(props){
        return Math.round(props)
    }
    function stars(props){
        let array = []
        for(let i = 0; i < round(props); i++){
            array.push(<div>★</div>)
        }
        for(let i = 0; i < 5 - round(props); i++){
            array.push(<div>☆</div>)
        }
        return array
    }
  
    return (
        <div class='d-flex m-2 mx-4 h1 flex align-items-center'>
            {stars(props.rate)}
        </div>
    )
}
