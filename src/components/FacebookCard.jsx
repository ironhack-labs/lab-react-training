import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './DriverCard.css'

export default function FacebookCard(props) {
    return (
        <li className="facebook-card">
            <Container>
                <Row>
                    <Col md="4">
                        <img className="facebook-img" src={props.img} alt={props.name} />
                    </Col>
                    <Col className="facebook-data" md="8">
                        <p><strong>First Name: </strong>{props.firstName}</p>
                        <p><strong>Last Name: </strong>{props.lastName}</p>
                        <p><strong>Country: </strong>{props.country}</p>
                        <p><strong>Type: </strong>{props.isStudent === true ? 'Student' : 'Teacher'}</p>
                    </Col>
                </Row>
            </Container>
        </li>
    )
}