import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './DriverCard.css'

export default class FacebookCard extends React.Component {
    constructor(props) {
        super(props)
        this.handleToggleClick = this.handleToggleClick.bind(this);
        this.state = {
            info: false
        }
    }

    handleToggleClick() {
        this.setState(state => ({
            info: !state.info
        }))
    }

    render() {
        return (
            <Container className={`facebook-card ${this.props.className}`}>
                <Row>
                    <Col md="4">
                        <img className="facebook-img" onClick={this.handleToggleClick} src={this.props.img} alt={this.props.name} />
                    </Col>
                    {this.state.info && 
                        <Col className="facebook-data" md="8">
                            <p><strong>First Name: </strong>{this.props.firstName}</p>
                            <p><strong>Last Name: </strong>{this.props.lastName}</p>
                            <p><strong>Country: </strong>{this.props.country}</p>
                            <p><strong>Type: </strong>{this.props.isStudent === true ? 'Student' : 'Teacher'}</p>
                        </Col>
                    }
                </Row>
            </Container>
        )
    }
}