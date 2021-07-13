import logo from './logo.svg';
import './App.css';
import Person from './Card';
import Greetings from './Greetings';
import Random from './Random';
import Color from './Color';
import Credit from './Credit';
import Counter from './Counter';
import Image from './Image';
import Even from './Even';
function App() {
  return (
    <div className="App">
      <Person
        lastName="Doe"
        firstName="John"
        gender="male"
        height={1.78}
        birth={new Date('1992-07-14')}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <Person
        lastName="Delores "
        firstName="Obrien"
        gender="female"
        height={1.72}
        birth={new Date('1988-05-11')}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
      <Greetings lang="Hallo" name="Ludwig" />
      <Greetings lang="Bonjour" name="François" />
      <Random min="1" max="6" />
      <Random min="1" max="100" />
      <Color style={{ backgroundColor: 'rgb(255,0,0)' }} name="red" />
      <Color style={{ backgroundColor: 'rgb(128,255,0)' }} name="green" />
      <Credit
        type="Visa"
        number="0123456789018845"
        expirationMonth={3}
        expirationYear={2021}
        bank="BNP"
        owner="Maxence Bouret"
        style={{
          backgroundColor: '#11aa99',
          color: 'white',
          maxWidth: '400px',
          border: '1px solid black',
        }}
        bgColor="#11aa99"
        color="white"
      />
      <Credit
        type="Master Card"
        number="0123456789010995"
        expirationMonth={3}
        expirationYear={2021}
        bank="N26"
        owner="Maxence Bouret"
        style={{
          backgroundColor: '#eeeeee',
          color: '#222222',
          maxWidth: '400px',
          border: '1px solid black',
        }}
        bgColor="#eeeeee"
        color="#222222"
      />
      <Credit
        type="Visa"
        number="0123456789016984"
        expirationMonth={12}
        expirationYear={2019}
        bank="Name of the Bank"
        owner="Firstname Lastname"
        style={{
          backgroundColor: '#ddbb55',
          color: 'white',
          maxWidth: '400px',
          border: '1px solid black',
        }}
        bgColor="#ddbb55"
        color="white"
      />
      <Counter />
      <Image />
      <Even limit={12} />
    </div>
  );
}

export default App;
