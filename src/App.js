import './App.css';
import IdCard from './components/IdCard/IdCard';
import Greetings from './components/greetings/Greetings';
import Random from './components/random/random';
import BoxColor from './components/boxcolor/BoxColor';
import CreditCard from './components/creditcard/CreditCard';

function App() {
  const data = [
    {
      lastName: 'Sponge',
      firstName: 'Bob',
      gender: 'male',
      height: 128,
      birth: new Date('1986-07-14'),
      picture:
        'https://thypix.com/wp-content/uploads/2021/11/sponge-bob-profile-picture-thypix-28.jpg',
    },

    {
      lastName: 'Ciccone',
      firstName: 'Madonna Louise',
      gender: 'female',
      height: 161,
      birth: new Date('1958-08-16'), //ni puta idea de como formatear esto. si uso '.format('MM-DD-YYYY')' peta
      picture:
        'http://1.bp.blogspot.com/_tHQ1gA2brsc/TCO-RLIQXfI/AAAAAAAAFSE/_x3LpZZ261s/s400/madonna-80%27s.jpg',
    },
  ];

  return (
    <>
      <div>
        <div className="App">
          {data.map((props, index) => {
            return <IdCard key={index} data={props} />;
          })}
        </div>

        <div className="GreetingsCard">
          <h3>Greetings</h3>
          <Greetings lang="fr">François</Greetings>
          <Greetings lang="de">Ludwig</Greetings>
        </div>
      </div>
      <div className="RandomCard">
        <h3>Random integer</h3>
        <Random min={1} max={6}></Random>
        <Random min={1} max={100}></Random>
      </div>

      <div className="BoxColorContainer">
        <h3>BoxColor</h3>

        <BoxColor r={181} g={234} b={215} />
        <BoxColor r={226} g={240} b={203} />
        <BoxColor r={199} g={206} b={234} />
        <BoxColor r={255} g={218} b={193} />
        <BoxColor r={255} g={183} b={178} />
      </div>
      <br />
      
      <h3>Credit Cards</h3>
      <CreditCard
        type="Visa"
        number="0123456789018845"
        expirationMonth="03"
        expirationYear="2021"
        bank="BNP"
        owner="Max Power"
        bgColor="#11aa99"
        color="white"
      ></CreditCard>

      <CreditCard
        type="Mastercard"
        number="0123456789010995"
        expirationMonth="03"
        expirationYear="2021"
        bank="N26"
        owner="Max Power"
        bgColor="#eeeeee"
        color="#222222"
      ></CreditCard>

      <CreditCard
        type="Mastercard"
        number="0123456789016984"
        expirationMonth="12"
        expirationYear="2019"
        bank="Name of the Bank"
        owner="Firstname Lastname"
        bgColor="#ddbb55"
        color="white"
      ></CreditCard>
    </>
  );
}

export default App;
