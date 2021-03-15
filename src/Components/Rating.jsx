import React from 'react'

function Rating(props) {
    let roundNumber = Math.round(props.children);
   
    if(roundNumber === 0 ){
        return (
            <div>
            <p>empty empty empty empty empty</p>
            </div>
        )
    } 
    if(roundNumber === 1 ){
        return (
            <div>
            <p>full empty empty empty empty</p>
            </div>
        )
    }
    if(roundNumber === 2 ){
        return (
            <div>
            <p>full full empty empty empty</p>
            </div>
        )
    }
    if(roundNumber === 3 ){
        return (
            <div>
            <p>full full full empty empty</p>
            </div>
        )
    }
    if(roundNumber === 4 ){
        return (
            <div>
            <p>full full full full empty</p>
            </div>
        )
    }
    if(roundNumber === 5 ){
        return (
            <div>
            <p>full full full full full</p>
            </div>
        )
    }
        
}

export default Rating;
