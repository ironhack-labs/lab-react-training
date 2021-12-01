import { useState } from 'react'

export const Carousel = () => {
  const imgs = [
    'https://randomuser.me/api/portraits/women/1.jpg',
    'https://randomuser.me/api/portraits/men/1.jpg',
    'https://randomuser.me/api/portraits/women/2.jpg',
    'https://randomuser.me/api/portraits/men/2.jpg'
  ]
  const [img, setImg] = useState(imgs[0]) 

  const handleNext = () => {
    if (imgs.indexOf(img) === imgs.length - 1) {
      setImg(imgs[0])
    }
    setImg(img => img = imgs[imgs.indexOf(img) + 1])
  }

  const handlePrev = () => {
    if (imgs.indexOf(img) === 0) {
      setImg(img => img = imgs[imgs.length - 1])
    }
    setImg(img => img = imgs[imgs.indexOf(img) - 1])
  }
  
  return (
    <div>
      <img src={img} style={{height: '500px'}} alt="potrait" />
      <button onClick={handlePrev}>PREV</button>
      <button onClick={handleNext}>NEXT</button>
    </div>
  )
}
