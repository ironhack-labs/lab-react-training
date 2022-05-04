import IdCard from './components/IdCard'
import Greeting from './components/Greetings'
import Random from './components/Random'
import BoxColor from './components/BoxColor'
import CreditCard from './components/CreditCard'
import Rating from './components/Rating'
import DriverCard from './components/DriverCar'
import LikeButton from './components/LikeButton'
import ClickablePicture from './components/ClickablePicture'
import Dice from './components/DiceC'
import Carousel from './components/Carousel'
import NumbersTable from './components/NumbersTable'


import './styles/CreditCard.css'


import './App.css'


function App() {
  return (
    <div className='App'>
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

      <Greeting lang="fr"></Greeting>
      <Greeting lang="cn"></Greeting>
      <Greeting lang="de"></Greeting>
      <hr></hr>

      <Random min={4} max={200}></Random>
      <Random min={2} max={100}></Random>
      <Random min={20} max={300}></Random>

      <hr></hr>

      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />

      <hr></hr>

      <div className='containerCards'>
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

      <hr></hr>

      <Rating >0</Rating>
      <Rating >1.49</Rating>
      <Rating >1.5</Rating>
      <Rating >3</Rating>
      <Rating >4</Rating>
      <Rating >5</Rating>

      <hr></hr>

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

      <LikeButton />

      <ClickablePicture
        img='../images/maxence.png'
        imgClicked='../images/maxence-glasses.png'
      />

       <Dice /> 

      <Carousel
        images={[
          'https://i.pinimg.com/originals/2c/9c/20/2c9c20954029da1dec1020493d9b1347.jpg',
          'https://pbs.twimg.com/media/FD-Y3soVEAE9Sjj?format=jpg&name=900x900',
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6SNu4cDTLqsFoMgIORoQfe9izG04yxTJEIA&usqp=CAU',
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-TfVTDO2fW25lmTObdGkYxh5rsli2iMuJsg&usqp=CAU'
        ]}
      />

      <NumbersTable limit={12} />

    </div>

  )
}

export default App;
