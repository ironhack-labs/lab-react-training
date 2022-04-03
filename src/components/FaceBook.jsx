import profiles from '../data/berlin.json';
import {
  Heading,
  Avatar,
  Box,
  Grid,
  GridItem,
  Image,
  Flex,
  Text,
  Stack,
  Button,
  VStack,
  HStack,
} from '@chakra-ui/react';
import React from 'react';
class FaceBook extends React.Component {
  state = {
    buttonSelected: '',
  };

  setFilter(country) {
    this.setState({
      buttonSelected: country,
    });
  }

  render() {
    let countries = [];
    profiles.forEach((profile) => {
      if (countries.indexOf(profile.country) === -1) {
        countries.push(profile.country);
      }
    });

    const filteredArray = profiles.filter((profile) => {
      return (
        profile.country
          .toLowerCase()
          .indexOf(this.state.buttonSelected.toLowerCase()) >= 0
      );
    });

    return (
      <VStack>
        <HStack my={4}>
          {countries.map((country, index) => {
            return (
              <Button
                onClick={(e) => this.setFilter(e.target.innerText)}
                key={index}
                variant="outline"
                colorScheme="teal"
              >
                {country}
              </Button>
            );
          })}
        </HStack>
        <Grid templateColumns="repeat(4, 1fr)" mx={4} gap={6}>
          {filteredArray.map((profile, index) => (
            <GridItem key={index}>
              <Box
                maxW={'270px'}
                grow={1}
                w={'full'}
                bg="white"
                boxShadow={'2xl'}
                rounded={'md'}
                overflow={'hidden'}
              >
                <Image
                  h={'120px'}
                  w={'full'}
                  alt=""
                  src={
                    'https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
                  }
                  objectFit={'cover'}
                />
                <Flex justify={'center'} mt={-12}>
                  <Avatar
                    size={'xl'}
                    src={profile.img}
                    alt={'Author'}
                    css={{
                      border: '2px solid white',
                    }}
                  />
                </Flex>

                <Box p={6}>
                  <Stack spacing={0} align={'center'} mb={5}>
                    <Heading
                      textAlign="center"
                      fontSize={'2xl'}
                      fontWeight={500}
                      fontFamily={'body'}
                    >
                      {profile.firstName} {profile.lastName}
                    </Heading>
                    <Text color={'gray.500'}>{profile.country}</Text>
                  </Stack>

                  {/* <Stack direction={'row'} justify={'center'} spacing={6}>
                <Stack spacing={0} align={'center'}>
                  <Text fontWeight={600}>23k</Text>
                  <Text fontSize={'sm'} color={'gray.500'}>
                    Followers
                  </Text>
                </Stack>
                <Stack spacing={0} align={'center'}>
                  <Text fontWeight={600}>23k</Text>
                  <Text fontSize={'sm'} color={'gray.500'}>
                    Followers
                  </Text>
                </Stack>
              </Stack> */}

                  <Button
                    w={'full'}
                    mt={8}
                    bg={profile.isStudent ? '#151f21' : 'tomato'}
                    color={'white'}
                    rounded={'md'}
                    _hover={{
                      transform: 'translateY(-2px)',
                      boxShadow: 'lg',
                    }}
                  >
                    {profile.isStudent ? 'Student' : 'Teacher'}
                  </Button>
                </Box>
              </Box>
            </GridItem>
          ))}
        </Grid>
      </VStack>
    );
  }
}

export default FaceBook;
