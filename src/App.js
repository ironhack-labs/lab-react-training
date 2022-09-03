import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import Rating from './components/Rating';

function App() {
  return (
    <div className="App">
      <h1>IdCard</h1>
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth={new Date('1992-07-14')}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <IdCard
        lastName="Delores "
        firstName="Obrien"
        gender="female"
        height={172}
        birth={new Date('1988-05-11')}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />

      <h1>Greetings</h1>
      <Greetings lang="de">Ludwing</Greetings>
      <Greetings lang="fr">François</Greetings>

      <h1>Random</h1>
      <Random min={1} max={6} />
      <Random min={1} max={100} />

      <h1>BoxColor</h1>
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />

      <h1>CreditCard</h1>
      <div className="cards">
        <CreditCard
          logo="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/772px-Mastercard-logo.svg.png"
          type="MasterCard"
          number="0123 4567 8901 8845"
          expirationMonth={3}
          expirationYear={2021}
          bank="BNP"
          owner="Maxence Bouret"
          bgColor="#11aa99"
          color="white"
        />
        <CreditCard
          logo="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/772px-Mastercard-logo.svg.png"
          type="MasterCard"
          number="0123 4567 8901 0995"
          expirationMonth={3}
          expirationYear={2021}
          bank="N26"
          owner="Maxence Bouret"
          bgColor="#eeeeee"
          color="#222222"
        />

        <CreditCard
          logo="https://logosmarcas.net/wp-content/uploads/2020/05/Visa-Logo-500x281.png"
          type="Visa"
          number="0123 4567 8901 6984"
          expirationMonth={12}
          expirationYear={2019}
          bank="Name of the Bank"
          owner="Firstname Lastname"
          bgColor="#ddbb55"
          color="white"
        />
      </div>

      <h1>Rating</h1>
      <Rating
        imgOut="https://cdn-icons-png.flaticon.com/512/32/32172.png"
        imgIn="https://cdn-icons-png.flaticon.com/512/786/786331.png"
      >
        0
      </Rating>
      <Rating
        imgOut="https://cdn-icons-png.flaticon.com/512/32/32172.png"
        imgIn="https://cdn-icons-png.flaticon.com/512/786/786331.png"
      >
        1.49
      </Rating>
      <Rating
        imgOut="https://cdn-icons-png.flaticon.com/512/32/32172.png"
        imgIn="https://cdn-icons-png.flaticon.com/512/786/786331.png"
      >
        1.5
      </Rating>
      <Rating
        imgOut="https://cdn-icons-png.flaticon.com/512/32/32172.png"
        imgIn="https://cdn-icons-png.flaticon.com/512/786/786331.png"
      >
        3
      </Rating>
      <Rating
        imgOut="https://cdn-icons-png.flaticon.com/512/32/32172.png"
        imgIn="https://cdn-icons-png.flaticon.com/512/786/786331.png"
      >
        4
      </Rating>
      <Rating
        imgOut="https://cdn-icons-png.flaticon.com/512/32/32172.png"
        imgIn="https://cdn-icons-png.flaticon.com/512/786/786331.png"
      >
        5
      </Rating>
    </div>
  );
}

export default App;
