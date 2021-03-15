import React from 'react'


const IdCard = (props) => {
    return (
        <div style={{
            border: "1px solid black",
            display: 'flex',
            padding:20
          }}>
            <img style={{ width:200, height:200}} src={props.picture} alt={props.picture}/>
            <h2 style={{textAlign:"left", fontSize:12, paddingLeft:20}}> <p>First Name: <span>{props.firstName}</span></p><p>Last Name: <span>{props.lastName}</span></p> <p>Age: <span>{props.age}</span></p> <p>Gender: <span>{props.gender}</span></p> <p>Height: <span>{props.height}</span></p> <p>Date: <span>{props.date}</span></p></h2>
        </div>
    )
}

export default IdCard
