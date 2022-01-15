import React from 'react';
import './LikeButton.css';


const LikeButton = (props) => {

  const [ count, setCount ] = React.useState(1);
  const colors =  ['purple','blue','green','yellow','orange','red']

  const handleClick = () => {
    //console.log(event.target)
    setCount(count + 1) // set the new state
  }

  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  const divStyle = {
    backgroundColor: `${randomColor}`,
    padding: 10,
    border: 0,
    borderRadius: 5,
    margin: 5,
    fontWeight: 600,
  }

  return (
    <>
      <button className='button' style={divStyle} onClick={handleClick}
      >{count} Likes </button>
    </>
  )
}

export default LikeButton;