import {
  // Badge,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  // Link,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import Rating from './Rating';

const DriverCard = (props) => {
  return (
    <div>
      <br />
      <Center mx={4} py={6}>
        <Stack
          borderWidth="1px"
          borderRadius="lg"
          w={{ sm: '100%', md: '500px' }}
          // height={{ sm: '476px', md: '15rem' }}
          direction={{ base: 'column', md: 'row' }}
          bg={useColorModeValue('white')}
          boxShadow={'2xl'}
          padding={4}
          backgroundColor="#fff"
        >
          <Flex flex={1} align="center" justify="center" bg="white">
            <Image
              width={150}
              height={150}
              borderRadius="full"
              objectFit="cover"
              // boxSize="100%"
              src={props.img}
            />
          </Flex>
          <Stack
            flex={1}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            // grow
            p={1}
            pt={2}
            pr={4}
          >
            <Heading textAlign="center" fontSize={'2xl'} fontFamily={'body'}>
              {props.name}
            </Heading>
            <Text
              textAlign="center"
              fontWeight={300}
              color={'gray.500'}
              size="xs"
              mb={4}
            >
              {props.car.model}
              <br />
              {props.car.licensePlate}
            </Text>
            <Stack
              // width={'100%'}
              mt={'2rem'}
              direction={'row'}
              padding={2}
              justifyContent={'space-between'}
              alignItems={'center'}
            >
              <Button
                flex={1}
                fontSize={'sm'}
                rounded={'full'}
                _focus={{
                  bg: 'gray.200',
                }}
              >
                <Rating>{props.rating}</Rating>
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Center>
    </div>
  );
};

export default DriverCard;
