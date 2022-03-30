import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ChakraProvider, Center, VStack, Heading } from '@chakra-ui/react';
import IdCard from './components/IdCard.jsx';
import Message from './components/Message.jsx';
import Random from './components/Random.jsx';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import Rating from './components/Rating';
import DriverCard from './components/DriverCard';
import LikeButton from './components/LikeButton';
import ClickablePicture from './components/ClickablePicture'
import Dice from './components/Dice';

function App() {
  return (
    <ChakraProvider>
      <br />
      <br />
      <Center>
        <Heading padding={4} size="4xl">
          Labs with Chakra
        </Heading>
      </Center>
      <Center>
        <Heading as="h2" size="2xl" padding={10}>
          Building a Component: ID Card
        </Heading>
      </Center>
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth="1992-07-14"
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <IdCard
        lastName="Delores "
        firstName="Obrien"
        gender="female"
        height={172}
        birth="1988-05-11"
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
      <Center>
        <Heading as="h2" size="2xl" padding={10}>
          Building a Component: Banner/Message
        </Heading>
      </Center>
      <Message name="Ludwig" />
      <Message name="Francois" />
      <Center>
        <Heading as="h2" size="2xl" padding={10}>
          Building a Component: Banner/Message with Random Number
        </Heading>
      </Center>
      <Random min={1} max={6} />
      <Random min={1} max={100} />
      <Center>
        <Heading as="h2" size="2xl" padding={10}>
          Building a Component: Boxes with Different Colors
        </Heading>
      </Center>
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />
      <Center>
        <Heading as="h2" size="2xl" padding={10}>
          Building a Component: Credit Cards
        </Heading>
      </Center>
      <CreditCard
        type="visa"
        number="0123456789018845"
        expirationMonth={3}
        expirationYear={2021}
        bank="BNP"
        owner="Maxence Bouret"
        bgColor="bg-teal-500"
        color="white"
      />
      <CreditCard
        type="mastercard"
        number="0123456789010995"
        expirationMonth={3}
        expirationYear={2021}
        bank="N26"
        owner="Maxence Bouret"
        bgColor="bg-gray-100"
        color="trueGray-800"
      />
      <CreditCard
        type="visa"
        number="0123456789016984"
        expirationMonth={12}
        expirationYear={2019}
        bank="Name of the Bank"
        owner="Firstname Lastname"
        bgColor="bg-amber-300"
        color="white"
      />
      <Center>
        <Heading as="h2" size="2xl" padding={10}>
          Building a Component: Rating
        </Heading>
      </Center>
      {/* <Center display="flex" direction="column"> */}
      <VStack>
        <Rating>0</Rating>
        <Rating>1.49</Rating>
        <Rating>1.5</Rating>
        <Rating>3</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating>
      </VStack>
      {/* </Center> */}
      <Center>
        <Heading as="h2" size="2xl" padding={10}>
          Building a Component: Driver Cards
        </Heading>
      </Center>
      <VStack>
        <DriverCard
          name="Travis Kalanick"
          rating={4.2}
          img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
          car={{
            model: 'Toyota Corolla Altis',
            licensePlate: 'CO42DE',
          }}
        />
        <DriverCard
          name="Dara Khosrowshahi"
          rating={4.9}
          img="https://static01.nyt.com/images/2021/07/18/fashion/17WITH-UBERCEO1/merlin_189682938_5bb716ba-6386-42a8-85f5-218e119c3917-articleLarge.jpg?quality=75&auto=webp&disable=upscale"
          car={{
            model: 'Audi A3',
            licensePlate: 'BE33ER',
          }}
        />
      </VStack>
      <Center>
        <Heading as="h2" size="2xl" padding={10}>
          Building a Component: Like Button
        </Heading>
      </Center>
      <Center>
        <LikeButton />
      </Center>
      <Center>
        <Heading as="h2" size="2xl" padding={10}>
          Building a Component: Clickable Pictures
        </Heading>
      </Center>
      <Center>
        <ClickablePicture
          img="./assets/images/maxence.png"
          imgClicked="./assets/images/maxence-glasses.png"
        />
      </Center>
      <Center>
        <Heading as="h2" size="2xl" padding={10}>
          Building a Component: Dice
        </Heading>
      </Center>
      <Center>
        <Dice />
      </Center>
      <Center>
        <Heading as="h2" size="2xl" padding={10}>
          Building a Component: Numbers Table
        </Heading>
      </Center>
      <Center></Center>
    </ChakraProvider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
