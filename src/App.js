import './App.css';
import {IdCard, Greetings, Random, BoxColor, CreditCard, Rating, DriverCard, LikeButton, Dice, Carousel, NumbersTable} from './components'

function App() {
  return (
    <div className="App">

        <IdCard
          lastName='Doe'
          firstName='John'
          gender='male'
          height={178}
          birth={"1992-07-14"}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />

        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>

        <Random min={1} max={6}/>
        <Random min={1} max={100}/>

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

        <LikeButton />

        <Dice />

        <Carousel
          images={[
            'https://randomuser.me/api/portraits/women/1.jpg',
            'https://randomuser.me/api/portraits/men/1.jpg',
            'https://randomuser.me/api/portraits/women/2.jpg',
            'https://randomuser.me/api/portraits/men/2.jpg'
          ]}
        />

        <NumbersTable limit={11} />

    </div>
  );
}

export default App;
