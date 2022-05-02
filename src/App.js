import './App.css';
import BoxColor from './BoxColor/BoxColor';
import CreditCard from './CreditCard/CreditCard';
import DriverCard from './DriverCard/DriverCard';
import Greetings from './Greetings/Greetings';
import IdCard from './IdCard/IdCard';
import Random from './Random/Random';
import Rating from './Rating/Rating';


function App() {
  return (
    <div>
      <IdCard
        lastName='DiCaprio'
        firstName='Leonardo'
        gender='male'
        height={183}
        birth={new Date("1974-11-10")}
        picture='https://www.alohacriticon.com/wp-content/uploads/2019/08/leonardo-dicaprio-foto-biografia.jpg'
      />

      <IdCard
        lastName='Roberts'
        firstName='Julia'
        gender='female'
        height={177}
        birth={new Date("1967-10-28")}
        picture='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkuEzoMIyOsfI5rSUHomAqgE5XYG40JXuJsA&usqp=CAU'
      />

      <Greetings lang='en'>Claudia</Greetings>
      <Greetings lang='fr'>Roberto</Greetings>

      <Random min={10} max={27} />
      <Random min={33} max={49} />

      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />

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

      <Rating>0</Rating>
      <Rating>1.49</Rating>
      <Rating>1.5</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>

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






  );
}

export default App;
