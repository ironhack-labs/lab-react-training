import React from 'react';

const names = {
    margin: 10,
    padding: 10,
    "font-size": 50
}

function Rating({children}){
    return <div style={names} >
    {stars({children})}
    </div>
    
}

//☆★

function stars({children}){
    if(children > 1 && children <= 1.49 ){
        return "★☆☆☆☆"
    }
    if(children >= 1.50 && children < 3){
        return "★★☆☆☆"
    }
    if(children >= 3 && children < 4){
        return "★★★☆☆"
    }
    if(children >= 4 && children < 5){
        return "★★★★☆"
    }
    if(children >= 5 ){
        return "★★★★★"
    }
    return "☆☆☆☆☆"
    
}

export default Rating