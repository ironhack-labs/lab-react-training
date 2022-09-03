import Greeting from './components/greeting/greeting';
import IdCard from './components/IdCard/IdCard';
import Random from './components/random/random';
import BoxColor from './components/BoxColor/BoxColor';
import CreditCard from './components/CreditCard/creditCard';
import Rating from './components/rating/rating';
import Rating2 from './components/rating/rating.v2';
import DriverCard from './components/driverCard/driverCard';
import LikeButton from './components/LikeButton/LikeButton';

function App() {
  return (
    <div className="p-5 bg-light.bg-gradient">
      <IdCard
        lastname="Doe"
        firstname="John"
        gender="male"
        height={178}
        birth={new Date('1992-07-14')}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <IdCard
        lastname="Delores"
        firsname="Obrien"
        gender="female"
        height={172}
        birth={new Date('1988-05-11')}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
      <Greeting lang="de"> Ludwig</Greeting>
      <Greeting lang="fr"> François</Greeting>
      <Random min={1} max={6} />
      <Random min={1} max={100} />

      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />
      <div className='d-flex'>
        <CreditCard
          type="Visa"
          number="0123456789018845"
          expirationMonth={3}
          expirationYear={2021}
          bank="BNP"
          owner="Maxence Bouret"
          bgColor="#11aa99"
          color="white"
          coded="&#127802;&#127802;&#127802;&#127802; &#127802;&#127802;&#127802;&#127802; &#127802;&#127802;&#127802;&#127802;"
          fontS="18px"
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
          coded=" &#9679;&#9679;&#9679;&#9679; &#9679;&#9679;&#9679;&#9679; &#9679;&#9679;&#9679;&#9679; "
          fontS="22px"
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
          coded="&#9917;&#9917;&#9917;&#9917; &#9917;&#9917;&#9917;&#9917; &#9917;&#9917;&#9917;&#9917;"
          fontS="18px"

        />
      </div>

        <div>
        VERSION 1
        <Rating>0 </Rating>
        <Rating>1.49</Rating>
        <Rating>1.5</Rating>
        <Rating>3</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating>
        VERSION 2
        <Rating2>0</Rating2>
        <Rating2>1.49</Rating2>
        <Rating2>1.5</Rating2>
        <Rating2>3</Rating2>
        <Rating2>4</Rating2>
        <Rating2>5</Rating2>
        </div>
        <div className='p-4'>
        <DriverCard
        name="Travis Kalanick"
        rating={4.2}
        img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
        car={{
          model: "Toyota Corolla Altis",
          licensePlate: "CO42DE"
        }}
      />

      <DriverCard
        name="Dara Khosrowshahi"
        rating={4.9}
        img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
        car={{
          model: "Audi A3",
          licensePlate: "BE33ER"
        }}
        />
        <LikeButton />
        <LikeButton />
        <LikeButton />
        </div>
    </div>
  );
}

export default App;
