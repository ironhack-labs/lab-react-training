import React from 'react'
import Rating from './Rating'
import './DriverCard.css'
import Avatar from './Avatar'
import {Container, Row, Col} from 'react-bootstrap'

function DriverCard(props) {
    return (
        <div className="driver-card">
            <Container>
                <Row>
                    <Col className="avatar-container" md="4">
                        <Avatar img={props.img} />
                    </Col>
                    <Col className="info-container" md="8">
                        <h3>{props.name}</h3>
                        <Rating rating={props.rating}></Rating>
                        <p className="car-info">{props.car.model} - <span>{props.car.licensePlate}</span></p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default DriverCard