import './App.css'
import Greetings from './Greetings/Greetings'
import IdCard from './IdCard/IdCard'
import Random from './Random/Random'
import BoxColor from './BoxColor/BoxColor'
import CreditCard from './CreditCard/CreditCard'
import Rating from './Rating/Rating'
import LikeButton from './LikeButton/LikeButton'
import ClickablePicture from './ClickablePicture/ClickablePicture'
import img1 from './../assets/images/maxence.png'
import img2 from './../assets/images/maxence-glasses.png'
import Dice from './Dice/Dice'
import Carousel from './Carousel/Carousel'


function App() {
  return (
    <div className="App">

      <header className="App-header">

        <IdCard
          CardInfo={{
            firstName: 'John',
            lastName: 'Doe',
            gender: 'male',
            height: 178,
            birth: ('1992-07-14'),
            picture: "https://randomuser.me/api/portraits/men/44.jpg"
          }}

        />

        <IdCard
          CardInfo={{
            firstName: 'Obrien',
            lastName: 'Delores ',
            gender: 'female',
            height: 172,
            birth: ("1988-05-11"),
            picture: "https://randomuser.me/api/portraits/women/44.jpg"
          }}

        />


        < Greetings lang="de">Ludwig</Greetings>
        < Greetings lang="es">Popino</Greetings>
        < Greetings lang="fr">Ludwig</Greetings>
        < Greetings lang="en">Ludwig</Greetings>


        <Random min={1} max={6} />
        <Random min={1} max={100} />


        <BoxColor r={255} g={0} b={0}> 255-0-0</BoxColor>
        <BoxColor r={128} g={255} b={0}> 128-255-0</BoxColor>



        <section className='creditCard'>
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

        </section>

        {/* <Rating>{0}</Rating>
        <Rating>1.49</Rating>
        <Rating>1.5</Rating>
        <Rating>3</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating> */}



        {/* <DriverCard
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
        /> */}

        <section className='button'>
          <LikeButton />
          <LikeButton />
        </section>

        <ClickablePicture
          img={img2}
          imgClicked={img1}
        />


        <Dice />



        <Carousel
          images={[
            'https://randomuser.me/api/portraits/women/1.jpg',
            'https://randomuser.me/api/portraits/men/1.jpg',
            'https://randomuser.me/api/portraits/women/2.jpg',
            'https://randomuser.me/api/portraits/men/2.jpg'
          ]}
        />



      </header>
    </div>
  );
}

export default App;
