import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Titles from './components/0. Titles/Titles';
import ListIdCard from '../src/components/1. Id Card/ListIdCard';
import Greeting from './components/2. Greetings/Greeting.jsx';
import Random from './components/3. Random/Random';
import BoxColor from './components/4. BoxColor/BoxColor';
import CreditCard from './components/5. Credit Card/CreditCard';
import Rating from './components/6. Rating/Rating';
import DriverCard from './components/7. DriverCard/DriverCard.jsx';
import LikeButton from './components/8. LikeButton/LikeButton';
import ClickablePicture from './components/9. ClickablePicture/ClickablePicture';
import Dice from './components/10. Dice/Dice.jsx';
import Carousel from './components/11. Carousel/Carousel.jsx';
import NumbersTable from './components/12. NumbersTable/NumbersTable.jsx';
import FacebookSimple from './components/13. FacebookSimple/FacebookSimple.jsx';
import FacebookAdvanced from './components/14. FacebookAdvanced/FacebookAdvanced.jsx';
import SignupPage from './components/15. Form/SignupPage.jsx';
import SingleColorPicker from "./components/16. ColorPicker/SingleColorPicker.jsx"

function App() {
  return (
    <div className="App">
      <Titles num={1} title={'IdCard'} />
      <ListIdCard />
      <Titles num={2} title={'Greetings'} />
      <Greeting language="col">Mi pana</Greeting>
      <Greeting language="fr">Antoine!</Greeting>
      <Titles num={3} title={'Random'} />
      <Random min={1} max={5} />
      <Random min={1} max={100} />
      <Titles num={4} title={'BoxColor'} />
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />
      <Titles num={5} title={'CreditCard'} />
      <CreditCard />
      <Titles num={6} title={'Rating'} />
      <div className="row">
        <div className="col-6">
          <Rating>00000</Rating>
          <Rating>1.49</Rating>
          <Rating>1.5</Rating>
        </div>
        <div className="col-6">
          <Rating>3</Rating>
          <Rating>4</Rating>
          <Rating>5</Rating>
        </div>
      </div>
      <Titles num={7} title={'DriverCard'} />
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
      <Titles num={8} title={'LikeButton'} />
      <LikeButton />
      <Titles num={9} title={'ClickablePicture'} />
      <ClickablePicture
        img="/img/persons/maxence.png"
        imgClicked="/img/persons/maxence-glasses.png"
      />
      <Titles num={10} title={'Dice'} />
      <Dice />
      <Titles num={11} title={'Carousel'} />
      <Carousel
        imgs={[
          'https://randomuser.me/api/portraits/women/1.jpg',
          'https://randomuser.me/api/portraits/men/1.jpg',
          'https://randomuser.me/api/portraits/women/2.jpg',
          'https://randomuser.me/api/portraits/men/2.jpg',
        ]}
      />
      <Titles num={12} title={'NumbersTable'} />
      <NumbersTable limit={20} />
      <Titles num={13} title={'FaceBook Simple(Sliced to 6)'} />
      <FacebookSimple />
      <Titles num={14} title={'FaceBook Advanced'} />
      <FacebookAdvanced />
      <Titles num={15} title={'Form - SignupPage'} />
      <SignupPage />
      <Titles num={16} title={'Color Pickaflor'} />
      <SingleColorPicker />
    </div>
  );
}

export default App;
