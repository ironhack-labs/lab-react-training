import { Box, Center } from '@chakra-ui/react';

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length === 1 ? '0' + hex : hex;
}
function rgbToHex(r, g, b) {
  return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

const BoxColor = (props) => {
  const { r, g, b } = props;
  return (
    <Box bg={rgbToHex(r, g, b)} w="30%" p={4} mx="auto" my={2} color="white">
      <Center>
        r: {r}, g: {g}, b: {b} 
        <br />
        {rgbToHex(r, g, b)}
      </Center>
    </Box>
  );
};

export default BoxColor;
