import { Box } from '@chakra-ui/react';

const NumbersTable = (props) => {
  let result = [];
  for (let i = 1; i <= props.limit; i++) {
    const color = (i % 2 === 0) ? "tomato" : ""
    result.push(<Box bg={color} key={i} textAlign="center" w={100} border="1px solid" borderColor="black" p={4} color="black">
     {i}
         </Box>);
  }
  return <> {result}</>;
};

export default NumbersTable;
