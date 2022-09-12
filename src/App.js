import './App.css';
import IdCard from './components/IdCard/IdCard';
import Greetings from  './components/Greetings/Greetings'
import Random from './components/Random/Random';
import BoxColor from './components/BoxColor/BoxColor'
import CreditCard from './components/CreditCard/CreditCard';
import Rating from './components/Rating/Rating';
import DriverCard from './components/DriverCard/DriverCard';
import LikeButton from './components/LikeButton/LikeButton';
import ClickablePicture from './components/ClickablePicture/ClickablePicture';
import Dice from './components/Dice/Dice';
import Carousel from './components/Carousel/Carousel';



function App() {
  return (
    <div className="App container ">

      <div>
        <div>
          <h3 className='text-center mt-5'> Iterarion 1: ID Cards </h3>
          <hr />
        </div>
        <div>
        <IdCard
          className = 'row d-flex justify-content-start align-items-center border border-dark m-5'
          lastName='Doe'
          firstName='John'
          gender='male'
          height={178}
          birth={new Date("1992-07-14")}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />
        </div>
        <div>
        <IdCard className = 'row d-flex justify-content-start align-items-center border border-dark m-5'
          lastName='Delores '
          firstName='Obrien'
          gender='female'
          height={172}
          birth={new Date("1988-05-11")}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />
        </div>
      </div>
      <div>
        <div>
          <h3 className='text-center mt-5'> Iterarion 2: Greetings </h3>
          <hr />
        </div>
        <div>
          <Greetings lang='de'>Ludwig</Greetings>
          <Greetings lang='en'>Mike</Greetings>
          <Greetings lang='es'>Luis</Greetings>
          <Greetings lang='fr'>François</Greetings>
        </div>
      </div>
      <div>
        <div>
          <h3 className='text-center mt-5'> Iterarion 3: Random </h3>
          <hr/>
        </div>
        <div>
          <Random min={1} max={6}/>
          <Random min={1} max={100}/>
        </div>
      </div>
      <div>
        <div>
          <h3 className='text-center mt-5'> Iterarion 4: BoxColor </h3>
          <hr/>
        </div>
        <div>
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />
        </div>
      </div>
      <div>
        <div>
          <h3 className='text-center mt-5'> Iterarion 5: CreditCard </h3>
          <hr/>
        </div>
        <div className='row mb-5 d-flex justify-content-center align-items-center'>

        <CreditCard
          className="col-3 "
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
          className="col-3"
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
          className="col-3"
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
      <div>
        <div>
          <h3 className='text-center mt-5'> Iterarion 6: Rating </h3>
          <hr/>
        </div>
        <div className='mb-5 text-center'>
        <Rating>0</Rating>
        <Rating>1.49</Rating>
        <Rating>1.5</Rating>
        <Rating>3</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating>
        </div>
      </div>
      <div>
        <h3 className='text-center mt-5'> Iterarion 7: DriverCard </h3>
        <hr/>        
      </div>
      <div>
        <DriverCard
            className = 'row d-flex justify-content-center align-items-center border border-dark m-5'
            name="Travis Kalanick"
            rating={4.2}
            img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
            car={{
              model: "Toyota Corolla Altis",
              licensePlate: "CO42DE"
            }}
          />

          <DriverCard
            className = 'row d-flex justify-content-center align-items-center border border-dark m-5'
            name="Dara Khosrowshahi"
            rating={4.9}
            img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
            car={{
              model: "Audi A3",
              licensePlate: "BE33ER"
            }}
          />
      </div>
      <div>
        <div>
          <h3 className='text-center mt-5'> Iterarion 8: LikeButton </h3>
          <hr/>  
        </div>
        <div className='text-center mb-5'>
          <LikeButton/>
          <LikeButton/>
        </div>
      </div>
      <div>
        <div>
          <h3 className='text-center mt-5'> Iterarion 9: ClickablePicture </h3>
          <hr/>  
        </div>
        <div className='text-center mb-5'>
        <ClickablePicture
          img='maxence.png'
          imgClicked='maxence-glasses.png'
        />
        </div>
      </div>
      <div>
        <div>
          <h3 className='text-center mt-5'> Iterarion 10: Dice</h3>
          <hr/>  
        </div>
        <div className='text-center mb-5'>
          <Dice/>
        </div>
      </div>
      <div>
        <div>
          <h3 className='text-center mt-5'> Iterarion 11: Carousel</h3>
          <hr/>  
        </div>
        <div className='text-center mb-5'>
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
    </div>
  );
}

export default App;
