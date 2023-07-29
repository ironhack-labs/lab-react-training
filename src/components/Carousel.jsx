import { useState } from 'react'

function Carousel(props) { 
  const { images } = props
  const [index, setIndex] = useState(0)

  const handleLeft = () => {
    if (index === 0) {
      setIndex(images.length -1)
    } else {
      setIndex(index - 1)
    }
  }

  const handleRight = () => {
    if (index === images.length - 1) { 
      setIndex(0)
    } else {
      setIndex(index + 1)
    }
  }
  
  return (
    <div className='Carousel'>
      <button onClick={handleLeft}>Left</button>
      <img src={images[index]} alt='persons' />
      <button onClick={handleRight}>Right</button>
    </div>
  )
}

export default Carousel