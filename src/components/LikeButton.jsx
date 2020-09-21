import React from 'react'
import {Button} from 'react-bootstrap'

const setLikes = (e) => {
  e.preventDefault();
  const colorsBg = ['purple','blue','green','yellow','orange','red']
  const stringToArr = e.target.innerText.split(' ')
  const clickedBtn = e.target
  clickedBtn.style.backgroundColor = colorsBg[Math.floor(colorsBg.length * Math.random())]
  clickedBtn.style.borderColor = colorsBg[Math.floor(colorsBg.length * Math.random())]
  stringToArr[0] = parseInt(stringToArr[0]) + 1 
  clickedBtn.innerText = `${stringToArr[0]} ${stringToArr[0] === 1 ? 'Like' : 'Likes'}` 
}

function DriverCard() {
    return (
      <Button onClick={setLikes} size="lg" style={{marginBottom: '10px'}}>0 Likes</Button>
    )
}

export default DriverCard