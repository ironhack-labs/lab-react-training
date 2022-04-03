import React, { Component } from 'react';
import { Box, Input } from '@chakra-ui/react';

export default class SingleColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      r: 0,
      g: 0,
      b: 0,
    };
  }

  handleChange(event) {
    let { name, value } = event.target;
    this.props.updateColor(name, Number(value));
    this.setState({ [name]: Number(value) });
  }

  rgbToHex = (state) => {
    const { r, g, b } = state;
    return (
      '#' +
      [r, g, b]
        .map((x) => {
          const hex = x.toString(16);
          return hex.length === 1 ? '0' + hex : hex;
        })
        .join('')
    );
  };

  render() {
    return (
      <div w={250}>
        <p>{this.props.color}:</p>
        <Input
          type="number"
          name={this.props.color}
          value={this.state[this.props.color]}
          onChange={(e) => this.handleChange(e)}
        />
        <Box
          bg={this.rgbToHex(this.state)}
          border="1px"
          borderColor="#111"
          w={10}
          h={10}
          mb={4}
          p={4}
          color="white"
        ></Box>
      </div>
    );
  }
}
