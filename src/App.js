
import './App.css';
import IdCard from "./Components/IdCard";
import Greetings from "./Components/Greetings";
import Random from "./Components/Random";
// import BoxColor from './Components/BoxColor';
import CreditCard from "./Components/CreditCard";
import Rating from "./Components/Rating";
import DriverCard from "./Components/DriverCard";

function App() {
  return (
    <div>

        <IdCard lastName='Doe' firstName='John' gender='male' height={178} birth={new Date("1992-07-14").toISOString().slice(0,-14)} picture="https://randomuser.me/api/portraits/men/44.jpg" />

        <IdCard lastName='Delores' firstName='Obrien' gender='female' height={172} birth={new Date("1988-05-11").toISOString().slice(0,-14)} picture="https://randomuser.me/api/portraits/women/44.jpg" />
        

        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>

        <Random min={1} max={6}/>
        <Random min={1} max={100}/>

        {/* <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} /> */}

        <CreditCard
          type="Visa"
          number="0123456789018845"
          expirationMonth={3}
          expirationYear={2021}
          bank="BNP"
          owner="Maxence Bouret"
          bgColor="#11aa99"
          color="white" />
        <CreditCard
          type="Master Card"
          number="0123456789010995"
          expirationMonth={3}
          expirationYear={2021}
          bank="N26"
          owner="Maxence Bouret"
          bgColor="#eeeeee"
          color="#222222" />
        <CreditCard
          type="Visa"
          number="0123456789016984"
          expirationMonth={12}
          expirationYear={2019}
          bank="Name of the Bank"
          owner="Firstname Lastname"
          bgColor="#ddbb55"
          color="white" />

          <Rating>0</Rating>
          <Rating>1.49</Rating>
          <Rating>1.5</Rating>
          <Rating>3</Rating>
          <Rating>4</Rating>
          <Rating>5</Rating>


          
          <DriverCard
          name="Dara Khosrowshahi"
          rating={4.9}
          img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"/>
    </div>
  );
}

export default App;
