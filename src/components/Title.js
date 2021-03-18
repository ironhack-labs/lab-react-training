import React from 'react'
import '../assets/css/Title.css'

const Title = ({edit})=>{
    return(
        <div className='edit__title'>
        <h1>{edit}</h1>
        </div>
    )
    
}

export default Title