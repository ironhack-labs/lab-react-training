import logo from './logo.svg';
import './App.css';
import IdCard from './components/IdCard'
import Greetings from './components/Greetings'
import Random from './components/Random'
import BoxColor from './components/BoxColor'
import CreditCard from './components/CreditCard'
import Rating from './components/Rating'
import DriverCard from './components/DriverCard'
import LikeButton from './components/LikeButton'
import ClickablePicture from './components/ClickablePicture'
import Dice from './components/Dice'
import Carousel from './components/Carousel'
import FaceBook from './components/Facebook'

function App() {
  return (
    <div className="App">
      <div className="Iteration-1">

        <IdCard
          picture="https://randomuser.me/api/portraits/men/44.jpg"
          lastName='Doe'
          firstName='John'
          gender='male'
          height={178}
          birth={new Date("1992-07-14")}
        />

        <IdCard
          picture="https://randomuser.me/api/portraits/women/44.jpg"
          lastName='Delores '
          firstName='Obrien'
          gender='female'
          height={172}
          birth={new Date("1988-05-11")}
        />

      </div>

      <div className="Iteration-2">
        <div>
          <Greetings lang="de">Ludwig</Greetings>
        </div>
        <div>
          <Greetings lang="fr">François</Greetings>
        </div>
        <div>
          <Greetings lang="es">Belen</Greetings>
        </div>
        <div>
          <Greetings lang="en">John</Greetings>
        </div>
      </div>

      <div className="Iteration-3">
        <div>
          <Random min={1} max={6}/>
        </div>

        <div>
          <Random min={1} max={100}/>
        </div>
      </div>

      <div className="Iteration-4">
        <div>
          <BoxColor r={255} g={0} b={0} />
        </div>
        <div>
          <BoxColor r={128} g={255} b={0} />
        </div>
      </div>

       <div className="Iteration-5">
        <div>
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

        <div className="Iteration-6">
          <div><Rating>0</Rating></div>
          <div><Rating>1.49</Rating></div>
          <div><Rating>1.5</Rating></div>
          <div><Rating>3</Rating></div>
          <div><Rating>4</Rating></div>
          <div><Rating>5</Rating></div>
        </div>

        <div className="Iteration-7">
          <div>
            <DriverCard
              name="Travis Kalanick"
              rating={4.2}
              img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
              car={{
                model: "Toyota Corolla Altis",
                licensePlate: "CO42DE"
              }}
            />
          </div>

          <div>
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

        </div>

        <div className="Iteration-8">
          <LikeButton />
        </div>

        <div className="Iteration-9">
          <ClickablePicture
            img='maxence.png'
            imgClicked='maxence-glasses.png'
          />      
        </div>

        <div className="Iteration-10">
          <Dice />
        </div>

        <div className="Iteration-11">
          <Carousel
            images={[
              'https://randomuser.me/api/portraits/women/1.jpg',
              'https://randomuser.me/api/portraits/men/1.jpg',
              'https://randomuser.me/api/portraits/women/2.jpg',
              'https://randomuser.me/api/portraits/men/2.jpg'
            ]}
          />
        </div>

        <div className="Iteration-13">
          <FaceBook />
        </div>
      
      </div>

    </div>
  );
}

export default App;
