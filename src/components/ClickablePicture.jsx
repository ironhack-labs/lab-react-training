import React from 'react'

function ClickablePicture(props) {
    const {visibility, visibleFunction} = props;

    const visibilityFunction = () => {
        if(visibility) return './images/renato_alexandre.jpg';
        else if (!visibility) return './images/renato_alexandre _oculos.png'
    }
    
  return (
    <div>
    <button onClick ={visibleFunction}> <img src={visibilityFunction()} alt=""/></button>
        
    </div>
  )
}

export default ClickablePicture