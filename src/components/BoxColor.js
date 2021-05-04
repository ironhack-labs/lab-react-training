import React from 'react'
import styled from 'styled-components'

class BoxColor extends React.Component {
  componentToHex(c) {
    var hex = c.toString(16)
    return hex.length === 1 ? '0' + hex : hex
  }

  rgbToHex(r, g, b) {
    return (
      '#' +
      this.componentToHex(r) +
      this.componentToHex(g) +
      this.componentToHex(b)
    )
  }

  render() {
    const { r, g, b } = this.props
    
    //Styled components
    const BoxColorDiv = styled.div`
      max-width: 800px;
      margin: 0 auto;
      padding: 50px;
      border: 2px solid black;
      margin-bottom: 10px;
      background-color: rgb(${r}, ${g}, ${b});
    `

    return (
      <BoxColorDiv>
        <p>
          rgb({r},{g},{b})
        </p>
        <p>{this.rgbToHex(r, g, b)}</p>
      </BoxColorDiv>
    )
  }
}

export default BoxColor
