
import React from 'react';

const names = {
    margin: 10,
    padding: 10,
    backgroundColor: "#362bcf",
    borderRadius: 10,
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}

function DriverCard({name,rating,img,car:{model,licensePlate}}){
    return <div style={names} >
        <img alt={name} src={img} style={{borderRadius: 200,width:100, height: 100,margin: 10}} />
        <div style={{
            margin:10,textAlign:'left',
        }}>
    <h3 style={{
            margin:0,padding:0
        }}>{name}</h3>
    <h2 style={{
            margin:0,padding:0
        }}>{stars({rating})}</h2>
    <p  style={{
            margin:0,padding:0
        }}>{model} - {licensePlate}</p>
    </div>
    </div>
    
}

//☆★

function stars({rating}){
    if(rating >= 4 && rating < 4.8){
        return "★★★★☆"
    }
    if(rating >= 4.9 && rating < 5 ){
        return "★★★★★"
    }
    return "☆☆☆☆☆"
    
}

export default DriverCard