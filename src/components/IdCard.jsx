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

export default function IdCard(props) {
  return (
      <Center py={6}>
        <Stack
          borderWidth="1px"
          borderRadius="lg"
          w={{ sm: '100%', md: '540px' }}
          height={{ sm: '476px', md: '15rem' }}
          direction={{ base: 'column', md: 'row' }}
          bg={useColorModeValue('white')}
          boxShadow={'2xl'}
          padding={4}
          backgroundColor="#fff"
        >
          <Flex flex={1} bg="white">
            <Image
              borderRadius="xl"
              objectFit="cover"
              boxSize="100%"
              src={props.picture}
            />
          </Flex>
          <Stack
            flex={1}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            p={1}
            pt={2}
          >
            <Heading fontSize={'2xl'} fontFamily={'body'}>
              {props.firstName} {props.lastName}
            </Heading>
            <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
              {props.birth}
            </Text>
            <Stack
              width={'100%'}
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
                {props.gender}
              </Button>
              <Button
                flex={1}
                fontSize={'sm'}
                rounded={'full'}
                bg={'blue.400'}
                color={'white'}
                boxShadow={
                  '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                }
                _hover={{
                  bg: 'blue.500',
                }}
                _focus={{
                  bg: 'blue.500',
                }}
              >
                {props.height}cm
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Center>
  );
}