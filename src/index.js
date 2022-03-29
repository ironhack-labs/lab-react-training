import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ChakraProvider, Center, Heading } from '@chakra-ui/react';
import IdCard from './components/IdCard.jsx';
import Message from './components/Message.jsx';
import Random from './components/Random.jsx';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';

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
      <Center>
        <Heading as="h2" size="2xl" padding={10}>
          Building a Component: Driver Cards
        </Heading>
      </Center>
      <Center>
        <Heading as="h2" size="2xl" padding={10}>
          Building a Component: Clickable Pictures
        </Heading>
      </Center>
      <Center>
        <Heading as="h2" size="2xl" padding={10}>
          Building a Component: Dice
        </Heading>
      </Center>
      <Center>
        <Heading as="h2" size="2xl" padding={10}>
          Building a Component: Numbers Table
        </Heading>
      </Center>
    </ChakraProvider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
