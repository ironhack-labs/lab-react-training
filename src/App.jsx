import "./App.css";
import jsonIdCard from './data/idCard.json'
import IdCard from './components/ui/idCard/IdCard';
import Greetings from "./components/ui/Greetings/Greetings";
import Random from './components/ui/Random/Random';
import BoxColor from './components/ui/BoxColor/BoxColor';
import CreditCard from './components/ui/CreditCard/CreditCard';
import Rating from './components/ui/Rating/Rating';
import DriverCard from './components/ui/DriverCard/DriverCard';
import LikeButton from './components/ui/LikeButton/LikeButton';
import ClickablePicture from './components/ui/ClickablePicture/ClickablePicture';
import rick from './assets/images/pickleRick.jpg';
import glasses from './assets/images/glasses.png';
import Dice from "./components/ui/Dice/Dice";
import Carrousel from "./components/ui/Carrousel/Carrousel";
import NumberTable from "./components/ui/NumberTable/NumberTable";
import FaceBook from './components/ui/FaceBook/FaceBook';
import SignupPage from "./components/ui/SignupPage/SignupPage";
import RGBColorPicker from "./components/ui/RGBcolorPicker/RGBColorPicker";

function App() {
  return (
    <>
      <div className="App">
        <h1> LAB | React Training</h1>
      </div>

      <div>
        <h2 className="title"><u>IdCard</u></h2>
        <IdCard user={jsonIdCard[0]} />
        <IdCard user={jsonIdCard[1]} />
      </div>

      <div>
        <h2 className="title"><u>Greetings</u></h2>
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">FranÇois</Greetings>
      </div>

      <div>
        <h2 className="title"><u>Random</u></h2>
        <Random min={1} max={6} />
        <Random min={1} max={100} />
      </div>

      <div>
        <h2 className="title"><u>BoxColor</u></h2>
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />
      </div>

      <div>
        <h2 className="title"><u>CreditCard</u></h2>
        <div className="creditcard">
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
        <h2 className="title"><u>Rating</u></h2>
        <Rating>0</Rating>
        <Rating>1.49</Rating>
        <Rating>1.5</Rating>
        <Rating>3</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating>
      </div>

      <div>
        <h2 className="title"><u>DriverCard</u></h2>
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
      </div>
      
      <div>
        <h2 className="title"><u>LikeButton</u></h2>
        <div className="likebutton">
          <LikeButton />
          <LikeButton />
        </div>
      </div>
      

      <div>
        <h2 className="title"><u>ClickablePicture</u></h2>
      <ClickablePicture
        img={rick}
        imgClicked={glasses}
      />
      </div>
      
      <div>
        <h2 className="title2"><u>Dice</u></h2>
        <Dice />
      </div>

      <div>
        <h2 className="title"><u>Carrousel</u></h2>
        <Carrousel
          images={[
            "https://randomuser.me/api/portraits/women/1.jpg",
            "https://randomuser.me/api/portraits/men/1.jpg",
            "https://randomuser.me/api/portraits/women/2.jpg",
            "https://randomuser.me/api/portraits/men/2.jpg"
          ]}
        />
      </div>

      <div>
        <h2 className="title"><u>Numbers Table</u></h2>
        <NumberTable limit={12} />
      </div>

      <div>
        <h2 className="title"><u>FaceBook</u></h2>
        <FaceBook />
      </div>

      <div>
        <h2 className="title"><u>SignupPage</u></h2>
        <SignupPage />
      </div>

      <div>
        <h2 className="title"><u>RGBColorPicker</u></h2>
        <RGBColorPicker />
      </div>
    </>
  );
}

export default App;
