import './App.css'
import IdCard from './components/IdCard/IdCard'
import Greetings from './components/Greetings/Greetings'
import Random from './components/Random/Random'
import BoxColor from './components/BoxColor/BoxColor'
import CreditCard from './components/CreditCard/CreditCard'
import Rating from './components/Rating/Rating'
import DriverCard from './components/DriverCard/DriverCard'
import LikeButton from './components/LikeButton/LikeButton'
import ClickablePicture from './components/ClickablePicture/ClickablePicture'
import maxence from './assets/images/maxence.png'
import maxenceGlasses from './assets/images/maxence-glasses.png'
import Dice from './components/Dice/Dice'
import Carousel from './components/Carousel/Carousel'
// import NumbersTable from './components/NumbersTable/NumbersTable'

function App() {
  return (
    <>
      <h2>Iterracion 1</h2>
      <IdCard
        lastName={'Doe'}
        firstName={'John'}
        gender={'male'}
        height={178}
        birth={new Date("1992-07-14")}
        picture={"https://randomuser.me/api/portraits/men/44.jpg"}
      />

      <IdCard
        lastName={'Delores'}
        firstName={'Obrien'}
        gender={'female'}
        height={172}
        birth={new Date("1988-05-11")}
        picture={"https://randomuser.me/api/portraits/women/44.jpg"}
      />
      <h2>Iterracion 2</h2>
      <Greetings
        lang={"de"}
        children={'Ludwig'}
      />

      <Greetings
        lang={'fr'}
        children={'Francois'}
      />
      <h2>Iterracion 3</h2>

      <Random
        min={2}
        max={7}
      />

      <Random
        min={1}
        max={6}
      />
      <h2>Iterracion 4</h2>

      <BoxColor
        r={255}
        g={0}
        b={0}
      />

      <h2>Iterracion 5</h2>

      <CreditCard
        type={"Visa"}
        number={'0123456789018845'}
        expirationMonth={3}
        expirationYear={2021}
        bank={"BNP"}
        owner={"Maxence Bouret"}
        bgColor={"#11aa99"}
        color={"white"}
      />

      <CreditCard
        type={"Master Card"}
        number={'0123456789010995'}
        expirationMonth={3}
        expirationYear={2021}
        bank={"N26"}
        owner={"Maxence Bouret"}
        bgColor={"#eeeeee"}
        color={"#222222"}
      />

      <CreditCard
        type={"Visa"}
        number={'0123456789016984'}
        expirationMonth={12}
        expirationYear={2019}
        bank={"Name of the Bank"}
        owner={"Firstname Lastname"}
        bgColor={"#ddbb55"}
        color={"white"}
      />

      <h2>Iterracion 6</h2>

      <Rating
        children={0}
      />
      <Rating
        children={1.49}
      />
      <Rating
        children={1.5}
      />
      <Rating
        children={3}
      />
      <Rating
        children={4}
      />
      <Rating
        children={5}
      />

      <h2>Iterracion 7</h2>

      <DriverCard
        name={"Travis Kalanick"}
        rating={4.2}
        img={"https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"}
        car={{
          model: "Toyota Corolla Altis",
          licensePlate: "CO42DE"
        }}
      />

      <DriverCard
        name={"Dara Khosrowshahi"}
        rating={4.9}
        img={"https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"}
        car={{
          model: "Audi A3",
          licensePlate: "BE33ER"
        }}
      />

      <h2>Iterracion 8</h2>

      <LikeButton />
      <LikeButton />

      <h2>Iterracion 9</h2>

      <ClickablePicture
        img={maxence}
        imgClicked={maxenceGlasses}
      />

      <h2>Iterracion 10</h2>

      <Dice

        />

      <h2>Iterracion 11</h2>

      <Carousel
        images={[
          'https://randomuser.me/api/portraits/women/1.jpg',
          'https://randomuser.me/api/portraits/men/1.jpg',
          'https://randomuser.me/api/portraits/women/2.jpg',
          'https://randomuser.me/api/portraits/men/2.jpg'
        ]}
      />


      <h2>Iterracion 12</h2>


      {/* <NumbersTable
        limit={12}
      /> */}


    </>
  );
}

export default App;