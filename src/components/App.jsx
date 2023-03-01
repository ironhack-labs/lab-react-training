import './App.css';
import IdCard from './IdCard';
import Greetings from './Greetings';
import GenerateRandom from './Random';
import BoxColor from './BoxColor';
import CreditCard from './CreditCard';
import LikeButton from './likeButton';
import ClickablePicture from './ClickablePicture';
import Dice from './Dice';
import Carousel from './Carousel';
import NumbersTable from './NumbersTable';





function App() {
  return (
    <div className="App">

      <IdCard
        infoCard={{
          lastName: 'Doe',
          firstName: 'John',
          gender: 'male',
          height: 178,
          birth: new Date("1992-07-14"),
          picture: "https://randomuser.me/api/portraits/men/44.jpg"
        }}
      />

      <IdCard
        infoCard={{
          lastName: 'Delores',
          firstName: 'Obrien',
          gender: 'female',
          height: 172,
          birth: new Date("1988-05-11"),
          picture: "https://randomuser.me/api/portraits/women/44.jpg"
        }}
      />

      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>

      <GenerateRandom min={1} max={6} />
      <GenerateRandom min={1} max={100} />

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
      <LikeButton />
      <LikeButton />


      <ClickablePicture />

      <hr />

      <Dice />
      <hr />
      <Carousel
        images={[
          'https://randomuser.me/api/portraits/women/1.jpg',
          'https://randomuser.me/api/portraits/men/1.jpg',
          'https://randomuser.me/api/portraits/women/2.jpg',
          'https://randomuser.me/api/portraits/men/2.jpg'
        ]}
      />
      <hr />

      <NumbersTable limit={12} />


    </div>
  );
}

export default App;
