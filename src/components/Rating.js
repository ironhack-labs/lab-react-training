import React from 'react'


function Rating(props) {

    let puntuacion = Math.floor(props.children);
   
    let items = []
    for (let i= 0; i < puntuacion; i++){
        items.push(<span className="fa fa-star"></span>);
    }
    for (let i= puntuacion; i < 5; i++){
        items.push(<span className="fa fa-star-o"></span>);
    }
    
    return (
        <div>
            {items}
        </div>
    )     
}

export default Rating