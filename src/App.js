import './App.css';
import IdCard from './components/IdCard';
import Greeting from './components/Greeting';
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
import FaceBook from './components/FaceBook';

function App() {
  return (
    <div className="App">
      {/* iteration 1 */}
      <div>
        <h1>ID Card</h1>
        <IdCard
          lastName='Doe'
          firstName='John'
          gender='male'
          height={178}
          birth={new Date("1992-07-14")}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />

        <IdCard
          lastName='Delores '
          firstName='Obrien'
          gender='female'
          height={172}
          birth={new Date("1988-05-11")}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />
      </div>

      {/* iteration 2 */}
      <div>
        <h1>Greetings</h1>
        <Greeting lang="de">Ludwig</Greeting>
        <Greeting lang="es">Juan</Greeting>
        <Greeting lang="pt">Pedro</Greeting>
      </div>

      {/* iteration 3 */}
      <div>
        <h1>Random</h1>
        <Random min={1} max={6}/>
        <Random min={1} max={100}/>
      </div>

      {/* iteration 4 */}
      <div>
        <h1>Box Color</h1>
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />
      </div>

      {/* iteration 5 */}
      <div>
        <h1>Credit Card</h1>
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
      </div>

      {/* iteration 6 */}
      <div>
        <h1>Rating</h1>
        <Rating>0</Rating>
        <Rating>1.49</Rating>
        <Rating>1.5</Rating>
        <Rating>3</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating>
      </div>

      {/* iteration 7 */}
      <div>
        <h1>Driver Card</h1>
        <DriverCard
          name="Travis Kalanick"
          rating={4.2}
          img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
          car={{
            model: "Toyota Corolla Altis",
            licensePlate: "CO42DE"
          }}
        />
      </div>

      {/* iteration 8 */}
      <div>
        <h1>Like Button</h1>
        <LikeButton />
      </div>

      {/* iteration 9 */}
      <div>
        <h1>Evolve Charmander! (click)</h1>
        <ClickablePicture/>
      </div>

      {/* iteration 10 */}
      <div>
        <h1>Random Dice</h1>
        <Dice/>
      </div>

      {/* iteration 11 (check comments on component pls) */}
      <div>
        <h1>Carousel</h1>
        <Carousel
          images={[
            'https://randomuser.me/api/portraits/women/1.jpg',
            'https://randomuser.me/api/portraits/men/1.jpg',
            'https://randomuser.me/api/portraits/women/2.jpg',
            'https://randomuser.me/api/portraits/men/2.jpg'
          ]}
        />
      </div>

      {/* iteration 12 */}
      <div>
        <h1>Numbers Table</h1>
        <NumbersTable limit={12}/>
      </div>

      {/* iteration 13 */}
      <div>
        <h1>FaceBook</h1>
        <FaceBook/>

      </div>


    </div>
  );
}

export default App;
