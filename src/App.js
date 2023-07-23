import './App.css';
import Greetings from './components/Greeting';
import IdCard from './components/IdCard';
import React from 'react'
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';

const greetings = [
  { lang: 'en' },
  { lang: 'fr' }
]

const contacts = [
  {
    lastName: 'Doe',
    firstName: 'John',
    gender: 'male',
    height: 178,
    birth: new Date("1992-07-14"),
    picture: "https://randomuser.me/api/portraits/men/44.jpg"
  },
  {
    lastName: 'Delores',
    firstName: 'Obrien',
    gender: 'female',
    height: 172,
    birth: new Date("1988-05-11"),
    picture: "https://randomuser.me/api/portraits/women/44.jpg"
  }
]



function App() {
  const contactList = () => contacts.map(contact => {
    return <IdCard lastName={ contact.lastName} firstName={ contact.firstName } gender={ contact.gender } height={ contact.height } birth={ contact.birth } picture={ contact.picture }/>
  })

  const greetingsList = () => greetings.map((greeting, i) => {
    return <Greetings key={i} lang={greeting.lang} name="Ludwing"/>
  })

  return (
    <div className="App">
       {contactList()}
       {greetingsList()}
       <Random min={1} max={6} />
       <Random min={1} max={100} />
       <BoxColor r={255} g={0} b={0} />
       <BoxColor r={128} g={255} b={0} />
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
  );
}

export default App;
