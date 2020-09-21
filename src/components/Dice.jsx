import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'

const changeDice = (e) => {
  const imagesArr = ['/img/dice1.png','/img/dice2.png','/img/dice3.png','/img/dice4.png','/img/dice5.png','/img/dice6.png']
  const imageSrc = e.target
  imageSrc.src = '/img/dice-empty.png'
  setTimeout(() => {
    imageSrc.src = imagesArr[Math.floor(imagesArr.length * Math.random())]
  }, 1000);
}

function Dice() {
    return (
      <Container>
        <Row>
        <Col md={{ span: 4, offset: 4 }} >
          <img style={{cursor: 'pointer', backgroundColor: 'white', borderRadius: '30px'}} onClick={changeDice} className="img-fluid" src="/img/dice3.png" alt="Dice"/>
        </Col>
        </Row>
      </Container>
    )
}

export default Dice 