import React from 'react';
import logo from './logo.svg';
import './App.css';

function IdCard(props) {
  console.log(props, 'inside student card');
  return (
    <div
      style={{
        margin: '10px',
        height: '200px',
        width: '500px',
        border: '1px solid black',
        marginBottom: '10px',
        display: 'flex',
      }}
    >
      <img
        src={props.picture}
        alt=""
        style={{ height: '90%', paddingRight: '10px', paddingTop: '10px' }}
      ></img>
      <div>
        <p>Last name: {props.lastName}</p>
        <p>First name: {props.firstName}</p>
        <p>gender: {props.gender}</p>
        <p>Height: {props.height}</p>
        <p>Birth: {props.birth}</p>
      </div>
    </div>
  );
}

const people = [
  {
    lastName: 'Doe',
    firstName: 'John',
    gender: 'male',
    height: 178,
    birth: '1992-07-14',
    picture: 'https://randomuser.me/api/portraits/men/44.jpg',
  },
  {
    lastName: 'Delores',
    firstName: 'Obrien',
    gender: 'female',
    height: 172,
    birth: '1988-05-11',
    picture: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
];

// function Greetings(props) {
//   return (
//     <div>
//       <p>lang: {props.lang}</p>
//       <p>children: {props.children}</p>
//     </div>
//   );
// }

const Greetings = (props) => {
  if (props.lang === 'fr') {
    return (
      <div
        style={{
          margin: '10px',
          height: '50px',
          width: '500px',
          border: '1px solid black',
          marginBottom: '10px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        Bonjour {props.children}
      </div>
    );
  } else if (props.lang === 'de') {
    return (
      <div
        style={{
          margin: '10px',
          height: '50px',
          width: '500px',
          border: '1px solid black',
          marginBottom: '10px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        Halo {props.children}
      </div>
    );
  }
};

const Random = (props) => {
  return (
    <div
      style={{
        margin: '10px',
        height: '50px',
        width: '500px',
        border: '1px solid black',
        marginBottom: '10px',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {Math.floor(Math.random() * props.max - props.min + props.min)}
    </div>
  );
};

const BoxColor = (props) => {
  console.log(props);
  return (
    <div
      style={{
        margin: '10px',
        height: '50px',
        width: '500px',
        border: '1px solid black',
        marginBottom: '10px',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`,
      }}
    ></div>
  );
};

const CreditCard = (props) => {
  console.log(props);
  return (
    <div
      style={{
        margin: '10px',
        padding: '20px',
        height: '200px',
        width: '400px',
        border: '1px solid black',
        backgroundColor: `${props.bgColor}`,
        color: `${props.color}`,
        marginRight: '10px',
      }}
    >
      <p style={{ textAlign: 'end' }}>{props.type}</p>
      <p style={{ textAlign: 'center', fontWeight: 'bold' }}>{props.number}</p>
      <div style={{ display: 'flex' }}>
        <p style={{ marginRight: '5px' }}>{props.expirationMonth}</p>
        <p style={{ marginRight: '5px' }}>{props.expirationYear}</p>
        <p style={{ marginRight: '5px' }}>{props.bank}</p>
      </div>
      <p>{props.owner}</p>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {people.map((item, key) => (
          <div key={key}>
            <IdCard
              lastName={item.lastName}
              firstName={item.firstName}
              gender={item.gender}
              height={item.height}
              birth={item.birth}
              picture={item.picture}
            />
          </div>
        ))}
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>
        <Random min={1} max={6} />
        <Random min={1} max={100} />
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <CreditCard
            type="Visa"
            number="0123456789018845"
            expirationMonth={3}
            expirationYear={2021}
            bank="BNP"
            owner="Maxence Bouret"
            bgColor="#11aa99"
            color="white"
          />
          <CreditCard
            type="Master Card"
            number="0123456789010995"
            expirationMonth={3}
            expirationYear={2021}
            bank="N26"
            owner="Maxence Bouret"
            bgColor="#eeeeee"
            color="#222222"
          />
          <CreditCard
            type="Visa"
            number="0123456789016984"
            expirationMonth={12}
            expirationYear={2019}
            bank="Name of the Bank"
            owner="Firstname Lastname"
            bgColor="#ddbb55"
            color="white"
          />
        </div>
      </header>
    </div>
  );
}

export default App;
