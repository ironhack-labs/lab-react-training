import logo from './logo.svg';
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

function App() {
  return (
    <div className="App">
      <IdCard firstName='Leonardo'
              lastName='Bravo'
              gender='male'
              height={185}
              birth={new Date('1992-10-15').toString()}
              picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <IdCard firstName='Sofía'
              lastName='Bravo'
              gender='female'
              height={165}
              birth={new Date('1991-05-19').toString()}
              picture="https://randomuser.me/api/portraits/women/44.jpg"
      />

      <hr/>

      <Greetings lang="de" children="Leo" />
      <Greetings lang="en" children="Román" />
      <Greetings lang="es" children="Emmanuel" />
      <Greetings lang="fr" children="Joaquín" />

      <hr/>

      <Random min={1} max={6}/>
      <Random min={1} max={100}/>

      <hr/>

      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />

      <hr/>

      <div className='credit-grid'>
        
            <CreditCard type="Visa"
                    number="0123456789018845"
                    expirationMonth={3}
                    expirationYear={2021}
                    bank="BNP"
                    owner="Maxence Bouret"
                    bgColor="#11aa99"
                    color="white"
            />
          
            <CreditCard type="Master Card"
                    number="0123456789010995"
                    expirationMonth={3}
                    expirationYear={2021}
                    bank="N26"
                    owner="Maxence Bouret"
                    bgColor="#eeeeee"
                    color="#222222"
            />
          
            <CreditCard type="Visa"
                    number="0123456789016984"
                    expirationMonth={12}
                    expirationYear={2019}
                    bank="Name of the Bank"
                    owner="Firstname Lastname"
                    bgColor="#ddbb55"
                    color="white"
            />
      </div>
      

      <hr/>

      <Rating star = "☆☆☆☆☆" children= "0"/>
      <Rating star = "★☆☆☆☆" children= "1.49"/>
      <Rating star = "★★☆☆☆" children= "1.5"/>
      <Rating star = "★★★☆☆" children= "3"/>
      <Rating star = "★★★★☆" children= "4"/>
      <Rating star = "★★★★★" children= "5"/>

      <hr/>

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

      <hr/>

      <LikeButton />
      <LikeButton />

      <hr/>

      <ClickablePicture img='./assets/images/maxence.png'
                        imgClicked='../assets/images/maxence-glasses.png'
      />

      <hr/>

      <Dice />

    </div>
  );
}

export default App;
