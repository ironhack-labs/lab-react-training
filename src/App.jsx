
import './App.css';
import IdCard from './components/IdCard/IdCard';
import Greetings from './components/Greeting/Greetings';
import Random from './components/Random/Random';
import BoxColor from './components/Box-color/Box-color';
import CreditCard from './components/Credit-card/Credit-card';
import Counter from './components/Counter/Counter';
import ClickImage from './components/ClikedImage/ClikedImage';
import RandomDice from './components/Random-dice/Random-dice';
import Carousel from './components/Carousel/Carousel';
import NumbersTable from './components/NumbersTable/NumbersTable';
import FaceBook from './components/FaceBookPage/FaceBook';

function App() {

  const iDArray = [
    {
      lastName: 'Doe',
      firstName: 'John',
      gender: 'male',
      height: 178,
      birth: new Date("1992-07-14"),
      picture: "https://randomuser.me/api/portraits/men/44.jpg"
    },
    {
      lastName: 'Delores ',
      firstName: 'Obrien',
      gender: 'female',
      height: 172,
      birth: new Date("1988-05-11"),
      picture: "https://randomuser.me/api/portraits/women/44.jpg"
    }
  ]
  return (
    <div className="App">
      <div>
        <IdCard userId={iDArray[0]} />
        <IdCard userId={iDArray[1]} />
      </div>
      <div>
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>
      </div>
      <div>
        <Random min={1} max={6} />
        <Random min={1} max={100} />
      </div>
      <div>
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />
      </div>

      <div>
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
        <div>
          <Counter />
        </div>
        <ClickImage
          img='maxence.png'
          imgClicked='maxence-glasses.png'
        />
        <RandomDice />

      </div>
      <Carousel
        images={[
          'https://randomuser.me/api/portraits/women/1.jpg',
          'https://randomuser.me/api/portraits/men/1.jpg',
          'https://randomuser.me/api/portraits/women/2.jpg',
          'https://randomuser.me/api/portraits/men/2.jpg'
        ]}
      />
      <div>
        <NumbersTable limit={12} />
      </div>
      <div>
        <FaceBook />
      </div>
    </div >
  )
}

export default App;
