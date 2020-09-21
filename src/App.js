import React from 'react';
import './App.css';

// imnport components
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import Rating from './components/Rating';
import DriverCard from './components/DriverCard';


function App() {

  return (
    <div className="container">

      {/* Iteration #1 */}
      <section>
        <h2>Iteration 1 | Component: IdCard</h2>
        <IdCard
          lastName='Doe'
          firstName='John'
          gender='male'
          height={178}
          birth={new Date("1992-07-14")}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />

        <IdCard
          lastName='Delores'
          firstName='Obrien'
          gender='female'
          height={172}
          birth={new Date("1988-05-11")}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />
      </section>

      {/* Iteration 2 */}
      <section>
        <h2>Iteration 2 | Component: Greetings</h2>
        <Greetings 
          lang="de" 
          name='Ludwig' 
        />
        <Greetings
          lang="fr" 
          name='François'
        />
      </section>

      {/* Iteration 3 */}
      <section>
        <h2>Iteration 3 | Component: Random</h2>
        <Random min={1} max={6}/>
        <Random min={1} max={100}/>
      </section>

      {/* Iteration 4 */}
      <section>
        <h2>Iteration 4 | Component: BoxColor</h2>
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />
      </section>

      {/* Iteration 5 */}
      <section>
        <h2>Iteration 5 | Component: CreditCard</h2>
        <div id='creditcards'>
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
      </section>

      {/* Iteration 6 */}
      <section>
        <h2>Iteration 6 | Component: Rating</h2>
        <Rating rating={0} />
        <Rating rating={1.49} />
        <Rating rating={1.5} />
        <Rating rating={3} />
        <Rating rating={4} />
        <Rating rating={5}/>
      </section>

      {/* Iteration 7 */}
      <section>
        <h2>Iteration 7 | Component: DriverCard</h2>
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
      </section>

    </div>
  );
}

export default App;
