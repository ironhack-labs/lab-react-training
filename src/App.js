import logo from './logo.svg';
import './App.css';
import BoxColor from './components/BoxColor';
import DriverCard from './components/DriverCard';
import Greetings from './components/Greetings';
import IdCard from './components/IdCard';
import Random from './components/Random';
import Rating from './components/Rating';
import ClickablePicture from './components/ClickablePicture';
import Dice from './components/Dice';
import Carousel from './components/Carousel';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <div className=" container-fluid d-flex justify-content-center flex-column align-items-center">

        <h3 className="m-5">ITERATION 1: ID CARD</h3>

        <IdCard
          lastName='Doe'
          firstName='John'
          gender='male'
          height={178}
          birth="1992-07-14"
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />

        <IdCard
          lastName='Delores'
          firstName='Obrien'
          gender='female'
          height={172}
          birth="1988-05-11"
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />

        <h3 className="m-5">ITERATION 2: GREETINGS</h3>
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>

        <h3 className="m-5">ITERATION 3: RANDOM</h3>
        <Random min={1} max={6} />
        <Random min={1} max={100} />

        <h3 className="m-5">ITERATION 4: BOX COLOR</h3>
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />

        {/* <h3 className="m-5">ITERATION 5: CREDIT CARD</h3> */}

        <h3 className="m-5">ITERATION 6: RATING</h3>
        <Rating>0</Rating>
        <Rating>1.49</Rating>
        <Rating>1.5</Rating>
        <Rating>3</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating>


        <h3 className="m-5">ITERATION 7: DRIVER CARD</h3>
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

        <h3 className="m-5">ITERATION 9: CLICKABLE PICTURE</h3>

        <ClickablePicture
          img='/maxence.png'
          imgClicked='/maxence-glasses.png'
        />

        <h3 className="m-5">ITERATION 10: DICE</h3>
        <Dice />

        <h3 className='m-5'>ITERATION 11: CAROUSEL</h3>
        <Carousel
          images={[
            'https://randomuser.me/api/portraits/women/1.jpg',
            'https://randomuser.me/api/portraits/men/1.jpg',
            'https://randomuser.me/api/portraits/women/2.jpg',
            'https://randomuser.me/api/portraits/men/2.jpg'
          ]}
        />
      </div>
    </div>
  );
}

export default App;
