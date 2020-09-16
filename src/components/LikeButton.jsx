import React, {useState} from 'react';
import styled from 'styled-components';

const ButtonStyle = styled.div `

width: 20vw;
background-color: red;
display:flex;
justify-content: center;
align-items: center;

& > h2 {
    color : blue;
    
}


`

function LikeButton({props}) {
    let num = 0;


    let [click, setClick] = useState(num);

    const getRandomColor = () => {
        let colors = ['purple','blue','green','yellow','orange','red'];
        return colors[1 + Math.floor(colors.length*Math.random())]
      }


    

    const handleIncrementCount = ()=>{
        setClick(click+1)
        console.log(getRandomColor())
      }

      

    return (
        <ButtonStyle  style={{
            backgroundColor: getRandomColor()
          }} >
        <div onClick={handleIncrementCount}>
             
            <h2 onClick={handleIncrementCount}>{click} Likes</h2>
            
        </div>
        </ButtonStyle>
   
    )
}

export default LikeButton

