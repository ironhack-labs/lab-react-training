import React from 'react'
import { Carousel } from 'react-bootstrap'

const getImages = (imagesArr) => {
  const itemsArr = []
  for (let index = 0; index < imagesArr.length; index++) {
    itemsArr.push(<Carousel.Item key={index}><img src={imagesArr[index]} alt={index} className="d-block w-100"/></Carousel.Item>)
  }
  return itemsArr
}

function Slider(props) {
    return (
      <Carousel style={{marginTop: '10px', heigth: '400px', width: '60%'}}>
          {getImages(props.imgs)}
      </Carousel>
    )
}

export default Slider