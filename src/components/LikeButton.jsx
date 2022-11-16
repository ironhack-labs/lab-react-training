import {useState} from 'react'



function LikeButton() {
    const colorArr = ['purple','blue','green','yellow','orange','red']

    const [count, setCount] = useState(0)
    const increaseLikes = () => {
        setCount(count +1);
    }
    const decreaseLikes = () => {
        setCount(count -1);
    }

  return (
    <div>
      <button style={{backgroundColor: colorArr[Math.abs(count % colorArr.length)]}}>{count} Likes</button>
      <button onClick={decreaseLikes}> - </button>
      <button onClick={increaseLikes}> + </button>
    </div>
  )
}

export default LikeButton