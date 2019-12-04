import React, { Component } from 'react'
import styled from "styled-components"

const Box = styled.div`
    padding: 5vh 0;
    margin: 1.5vh;
    text-align: center;
`

export default class BoxColor extends Component {
    render() {
        return (
            <Box style={{ "backgroundColor": `rgb(${this.props.r},${this.props.g},${this.props.b})` }}>
                <p>rgb({this.props.r},{this.props.g},{this.props.b})</p>
            </Box>
        )
    }
}
