import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import Rating from './components/Rating';
import DriverCard from './components/DriverCard';
import LikeButton from './components/LikeButton';
import ClickablePicture from './components/ClickablePicture';
import Dice from './components/Dice';
import Carousel from './components/Carousel';
import NumbersTable from './components/NumbersTable';
import Facebook from './components/Facebook';
import SignupPage from './components/SignupPage';
import RGBColorPicker from './components/RGBColorPicker';
import SingleColorPicker from './components/SingleColorPicker';

export default function App() {
  return (
    <div className="App">
      <body>
        <IdCard
          lastName='Delores'
          firstName='Obrien'
          gender='female'
          height={172}
          birth={new Date("1988-05-11")}
          picture="https://randomuser.me/api/portraits/women/44.jpg"/>
        <div>
          <h1>Greetings</h1>
        </div>
        <div className="Greetings-container">
          <div className="Greetings-box">
            <Greetings lang="de">Ludwig</Greetings>
          </div>
          <div className="Greetings-box">
            <Greetings lang="fr">François</Greetings>
          </div>
        </div>
        <div>
          <h1>Random</h1>
        </div>
        <div className='Random-container'>
          <div>
            <Random min={1} max={6}/>
          </div>
          <div>
            <Random min={1} max={100}/>
          </div>
        </div>
        <div>
          <h1>BoxColor</h1>
        </div>
        <div className='boxcolor-container'>
          <div>
            <BoxColor r={255} g={0} b={0} />
          </div>
          <div>
            <BoxColor r={128} g={255} b={0} />
          </div>
        </div>
        <div>
          <h1>CreditCard</h1>
        </div>
        <div style={{display: 'flex', justifyContent: 'left'}}>
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
        <div>
          <h1>Rating</h1>
        </div>
        <Rating>0</Rating>
        <Rating>1.49</Rating>
        <Rating>1.5</Rating>
        <Rating>3</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating>
        <div>
          <h1>DriverCard</h1>
        </div>
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
        <div>
          <h1>LikeButton</h1>
        </div>
        <LikeButton />
        <div>
          <h1>ClickablePicture</h1>
        </div>
        <ClickablePicture
          img='svenja.png'
          imgClicked='svenja-glasses.png'
        />
        <div>
          <h1>Dice</h1>
        </div>
        <Dice />
        <div>
          <h1>Carousel</h1>
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
          <h1>NumbersTable</h1>
        </div>
        <NumbersTable limit={12} />
        <div>
          <h1>Facebook</h1>
        </div>
        <Facebook />
        <div>
          <h1>SignupPage</h1>
        </div>
        <SignupPage />
        <div>
          <h1>RGBColorPicker</h1>
        </div>
        <RGBColorPicker />
        <div>
          <h1>SingleColorPicker</h1>
        </div>
        <SingleColorPicker />
      </body>
    </div>
  );
}
