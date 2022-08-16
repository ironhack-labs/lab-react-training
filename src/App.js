import logo from './logo.svg';
import './App.css';
import IdCard from './components/IdCard/IdCard';
import studentInfo from './data/berlin.json'
import Random from './components/Random/Random';
import BoxColor from './components/BoxColor/BoxColor';
import CreditCard from './components/CreditCard/CreditCard';
import Rating from './components/Rating/Rating';
import DriverCard from './components/DriverCard/DriverCard';

function App() {
  return (
    <div className="App">
{/* Iteration 1: <IdCard idInfo={studentInfo}/> */}
{/* Iteration 2: <Greeting lang={language} children={'text'}> </Greeting> */}
{/* Iteration 3: <Random min={1} max={100}/> */}
{/* Iteration 4 <BoxColor r={255} g={0} b={0}/> */}

{/* Iteration 5 <CreditCard type={'Visa'} number={'0123456789018845'} expirationMonth={3} expirationYear={2021} bank={'BNP'} owner={'Maxence Bouret'} bgColor={'#11aa99'} color={'white'}/>
 */}

{/* iteration 6

 <Rating rating={0}/>
<Rating rating={1}/>
<Rating rating={1.5}/>
<Rating rating={3}/>
<Rating rating={4}/>
<Rating rating={5}/> */}

{/* Iteration 7: <DriverCard
  name="Dara Khosrowshahi"
  rating={4}
  img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
  car={{
    model: "Audi A3",
    licensePlate: "BE33ER"
  }}
/>

<DriverCard
  name="Travis Kalanick"
  rating={4.2}
  img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
  car={{
    model: "Toyota Corolla Altis",
    licensePlate: "CO42DE"
  }}
/> */}

    </div>
  );
}

export default App;
