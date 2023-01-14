import React, { useState } from 'react';
import { Avatar, Card } from 'antd';
import "./IdCard.css"
const { Meta } = Card;



function IdCard(props){
    const { personsArray} = props
    const [characters, setCharacters] = useState(personsArray)
    const copyOfArray = [...characters]
    console.log(copyOfArray)
    return(   
        <div className='persons'>
        {copyOfArray.map((person)=>{
            return <Card className='card' cover={
              <img
              className='small'
                alt="person"
                src={person.picture}
              />
             }>
            <Meta
              avatar={<Avatar src={person.picture} />}
              title={person.lastName +" " + person.firstName}
              description={"Description:" +"  "+ person.description}
            />
            <p className='margin-top'>Gender: {person.gender} </p>
            <p>Height: {person.height} cm</p>
            <p>Birth: {person.birth}</p>


          </Card>
        })}
            

        
  
        </div>
        )
}

export default IdCard