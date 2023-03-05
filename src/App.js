import './App.css';
import BoxColor from './components/misc/BoxColor';
// import Carousel from './components/misc/Carousel';
import ClickablePicture from './components/misc/ClickablePicture';
import CreditCard from './components/misc/CreditCard';
import Dice from './components/misc/Dice';
import DriverCard from './components/misc/DriverCard';
import Greetings from './components/misc/Greetings';
import IdCard from './components/misc/IdCard';
import LikeButton from './components/misc/LikeButton';
import Random from './components/misc/Random';
import Rating from './components/misc/Rating';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* It. 1 */}
        <IdCard
          lastName="Doe"
          firstName="John"
          gender="male"
          height={1.78}
          birth={new Date('1992-07-14').toLocaleDateString()}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />

        <IdCard
          lastName="Delores "
          firstName="Obrien"
          gender="female"
          height={1.72}
          birth={new Date('1988-05-11').toLocaleDateString()}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />

        {/* It. 2 */}

        <Greetings lang="fr">Daniel</Greetings>

        {/* It.3 */}

        <Random min={3} max={10}></Random>

        {/* It.4 */}

        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />

        {/* It.5 */}
        <div className="creditcards">
          <CreditCard
            type="Visa"
            number="0123456789018845"
            expirationMonth={3}
            expirationYear={2021}
            bank="BNP"
            owner="Maxence Bouret"
            bgColor="#11aa99"
            color="white"
          ></CreditCard>

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

        {/* It. 6 */}

        <Rating>0</Rating>
        <Rating>1.49</Rating>
        <Rating>1.5</Rating>
        <Rating>3</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating>

        {/* It. 7 */}

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
          img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
          car={{
            model: 'Audi A3',
            licensePlate: 'BE33ER',
          }}
        />

        <LikeButton />

        <ClickablePicture />

        <Dice></Dice>
{/* 
        <Carousel
          images={[
            'https://randomuser.me/api/portraits/women/1.jpg',
            'https://randomuser.me/api/portraits/men/1.jpg',
            'https://randomuser.me/api/portraits/women/2.jpg',
            'https://randomuser.me/api/portraits/men/2.jpg',
          ]}
        /> */}
      </header>
    </div>
  );
}

export default App;
