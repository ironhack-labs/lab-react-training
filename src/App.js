import './App.css';
import IdCard from './components/IdCard';
import './components/Component.css';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import Rating from './components/Rating';
import DriverCard from './components/DriverCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import LikeButton from './components/LikeButton';
import ClikablePicture from './components/ClickablePicture';
import maxence from './assets/images/maxence.png';
import maxenceGlass from './assets/images/maxence-glasses.png';
import Dice from './components/Dice';
import Carousel from './components/Carousel';
import NumberTable from './components/NumberTable';
import Facebook from './components/FacebookSimple';

function App() {
  return (
    <div>
      <h1 className="iteration">IdCard</h1>
      <div className="allCards">
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
      </div>

      <h1 className="iteration">Greetings</h1>
      <div className="allCards">
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>
      </div>
      <div>
        <h1 className="iteration">Random</h1>
        <Random min={1} max={6} />
        <Random min={1} max={100} />
      </div>
      <div>
        <h1 className="iteration">Box Color</h1>
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />
      </div>
      <div>
        <h1 className="iteration">Credit Card</h1>
        <div className="containerCard">
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
      </div>
      <div>
        <h1 className="iteration">Rating &#9733; &#9734;</h1>
        <Rating>0</Rating>
        <Rating>1.49</Rating>
        <Rating>1.5</Rating>
        <Rating>3</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating>
      </div>
      <div>
        <h1 className="iteration">Driver Card</h1>
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
      </div>
      <div>
        <h1 className="iteration">Like Button</h1>
        <LikeButton />
        <LikeButton />
      </div>
      <div>
        <h1 className="iteration">Clikable Picture</h1>
        <ClikablePicture img={maxence} imgClicked={maxenceGlass} />
      </div>
      <div>
        <h1 className="iteration">Dice</h1>
        <Dice />
      </div>
      <div>
        <h1 className="iteration">Carousel</h1>
        <Carousel
          images={[
            'https://randomuser.me/api/portraits/women/1.jpg',
            'https://randomuser.me/api/portraits/men/1.jpg',
            'https://randomuser.me/api/portraits/women/2.jpg',
            'https://randomuser.me/api/portraits/men/2.jpg',
          ]}
        />
        <div>
          <h1 className="iteration">Numbers Table</h1>
          <NumberTable limit={12} />
        </div>
      </div>
      <div>
        <h1 className="iteration">Facebook</h1>
        <Facebook />
      </div>
    </div>
  );
}

export default App;
