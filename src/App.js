import IdCard from "./components/id-card/IdCard";
import Greetings from "./components/greetings/Greetings";
import RandomNum from "./components/random-number/RandomNum";
import BoxColor from "./components/box-color/BoxColor";
import CreditCard from "./components/credit-card/CreditCard";
import Rating from "./components/rating/Rating";
import DriverCard from "./components/driver-card/DriverCard";
import LikeButton from "./components/like-button/LikeButton";
import ClickablePicture from "./components/clickable-picture/ClickablePicture";
import Dice from "./components/dice/Dice";
import Carousel from "./components/carousel/Carousel";


function App() {
  return (
    <div className="App">

      {/* Iteration 1 */ }
      <div className="id-cards">
        <h2 className="ms-4 mt-4">ID Card</h2>
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
      </div>

      <hr />

      {/* Iteration 2*/ }
      <div className="greetings mb-4">
        <h2 className="ms-4 my-4">Greetings</h2>
        <Greetings lang="es">Iván</Greetings>
        <Greetings lang="eng">John</Greetings>
        <Greetings lang="fr">FranÇois</Greetings>
        <Greetings >Ludwig</Greetings>
      </div>

      <hr />

      {/* Iteration 3*/ }
      <div className="random my-4">
        <h2 className="ms-4 my-4">Random Num</h2>  
        <RandomNum min={1} max={6}/>
        <RandomNum min={1} max={100}/>
      </div>

      <hr />

      {/* Iteration 4*/ }
      <div className="box.color my-4">
        <h2 className="ms-4 my-4">Box Color</h2>
        <BoxColor/>
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />
      </div>

      <hr />

      {/* Iteration 5*/ }
      <div>
        <h2 className="ms-4 my-4">Credit cards</h2>
        <div className="cards d-flex gap-5 my-4 mx-5">
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
      </div>

      <hr />

      {/* Iteration 6*/ }
      <div>
        <h2 className="ms-4 my-4">Rating</h2>
        <div className="d-flex flex-column align-items-center">
          <Rating>0</Rating>
          <Rating>1.49</Rating>
          <Rating>1.5</Rating>
          <Rating>3</Rating>
          <Rating>4</Rating>
          <Rating>5</Rating>
        </div>
      </div>

      <hr />

      {/* Iteration 7*/ }
      <div>
        <h2 className="ms-4 my-4">Driver Card</h2>
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

      <hr />

      {/* Iteration 8*/ }
      <div>
        <h2 className="ms-4 my-4">Like Button</h2>
        <div className="d-flex flex-row gap-5 mb-5 justify-content-center">
          <LikeButton />
          <LikeButton />
        </div>
      </div>

      <hr />

      {/* Iteration 9*/ }
      <div>
        <h2 className="ms-4 my-4">Clickable Picture</h2>
          <ClickablePicture />
      </div>

      <hr />

      {/* Iteration 10*/ }
      <div>
        <h2 className="ms-4 my-4">Dice</h2>
        <Dice />
      </div>

      <hr />

      {/* Iteration 11*/ }
      <div>
        <h2 className="ms-4 my-4">Carousel</h2>
        <Carousel 
          images={[
            'https://randomuser.me/api/portraits/women/1.jpg',
            'https://randomuser.me/api/portraits/men/1.jpg',
            'https://randomuser.me/api/portraits/women/2.jpg',
            'https://randomuser.me/api/portraits/men/2.jpg'
          ]}
        />
      </div>

      
    
    </div>
  );
}

export default App;
