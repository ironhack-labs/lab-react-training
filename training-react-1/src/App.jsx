import './App.css'
import IdCard from './components/IdCard'
import Greetings from './components/Greetings'
import Random from './components/Random'
import BoxColor from './components/BoxColor'
import LikeButton from './components/LikeButton'
// import creditCard from './components/CreditCard'
import ClickablePicture from './components/ClickablePicture'
// import Dice from './components/Dice'
import Carousel from './components/Carousel'
// import FaceBook from './components/FaceBook'


function App() {

  return (


    <>

      {/* ITERATION 1 */}

      <div className='IdCard'>

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

      </div >

      <hr />

      {/* ITERATION 2 */}

      <div className="Greetings">
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="en">Elise</Greetings>
        <Greetings lang="es">Laura</Greetings>
        <Greetings lang="fr">François</Greetings>
      </div>

      <hr />

      {/* ITERATION 3 */}

      <div className="Random">
        <Random min={1} max={6} />
        <Random min={1} max={100} />
      </div>

      <hr />

      {/* ITERATION 4 */}

      <div className="BoxColor">
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />
      </div>

      <hr />

      {/* ITERATION 5  ATASCADA*/}

      {/* <div className="creditCard">

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
      </div> */}

      <hr />

      {/* ITERATION 8 */}

      <div className="likeButton">
        <LikeButton />
        <LikeButton />
      </div>

      <hr />

      {/* ITERATION 9 */}

      <div className="ClickablePicture">
        <ClickablePicture
          img="maxence.png"
          imgClicked="maxence-glasses.png"
        />
      </div>

      <hr />

      {/* ITERATION 10 ATASCADA*/}

      {/* <div className="Dice">
        <Dice />
      </div> */}

      <hr />

      {/* ITERATION 11 */}

      <div className="Carousel">
        <Carousel
          images={[
            'https://randomuser.me/api/portraits/women/1.jpg',
            'https://randomuser.me/api/portraits/men/1.jpg',
            'https://randomuser.me/api/portraits/women/2.jpg',
            'https://randomuser.me/api/portraits/men/2.jpg'
          ]}
        />
      </div>

      <hr />

      {/* ITERACIÓN 12 --> ATASCADA */}

      {/* ITERACIÓN 13 */}

      {/* <div className="Facebook">
        <FaceBook />
      </div> */}











    </>
  )
}

export default App
