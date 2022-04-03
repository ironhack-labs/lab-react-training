import React, { Component } from 'react';
import { Box, HStack, VStack } from '@chakra-ui/react';
import SingleColorPicker from './SingleColorPicker';

export default class RGBColorPicker extends Component {
  state = {
    r: 0,
    g: 0,
    b: 0,
  };

  updateColor = (color, value) => {
    this.setState({
      [color]: value
    });
  };

  render() {
    const rgbToHex = (r, g, b) =>
      '#' +
      [r, g, b]
        .map((x) => {
          const hex = x.toString(16);
          return hex.length === 1 ? '0' + hex : hex;
        })
        .join('');

    const hex = rgbToHex(this.state.r, this.state.g, this.state.b);

    return (
      <VStack>
        <div>
          <HStack>
            {Object.keys(this.state).map((key, index) => {
              return (
                <SingleColorPicker
                  color={key}
                  key={index}
                    value={this.state[key]}
                  updateColor={this.updateColor}
                />
              );
            })}
          </HStack>
        </div>
        <br />
        <br />
        <div>
          <Box bg={hex} w={20} h={20}></Box>
        </div>
      </VStack>
    );
  }
}
