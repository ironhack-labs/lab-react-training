
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import Greetings from './components/Greetings';
import IdCard from './components/IdCard';
import Random from './components/Random';
import Rating from './components/Rating';

function App() {
  return (
    <div className='container py-3'>
      <div>
        <div>Idcard</div>
        <IdCard
          className="mb-2"
          lastName='Doe'
          firstName='John'
          gender='male'
          height={178}
          birth={new Date("1992-07-14")}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />
        <div>Idcard</div>
        <IdCard
          className="mb-2"
          lastName='Delores '
          firstName='Obrien'
          gender='female'
          height={172}
          birth={new Date("1988-05-11")}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />
      </div>

      <div>
        <Greetings
          className="mb-2"
          lang="de">Ludwig</Greetings>
        <Greetings
          className="mb-2" lang="fr">François</Greetings>
      </div>
      <div>
        <Random
          className="mb-2"
          min={1} max={6} />
        <Random
          className="mb-2"
          min={1} max={100} />
      </div>
      <div>
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={225} b={0} />
      </div>
      <div className='d-flex justify-content-between'>
        <CreditCard
          className="mb-2"
          type="Visa"
          number="0123456789018845"
          expirationMonth={3}
          expirationYear={2021}
          bank="BNP"
          owner="Paula Gonzalez"
          bgColor="#11aa99"
          color="white"
        />

        <CreditCard
          className="mb-2"
          type="Master Card"
          number="0123456789010995"
          expirationMonth={3}
          expirationYear={2021}
          bank="N26"
          owner="Francisco Lopez"
          bgColor="#eeeeee"
          color="#222222"
        />

        <CreditCard
          className="mb-2"
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
      <div className='Rating'>
        <Rating>0</Rating>
        <Rating>1.49</Rating>
        <Rating>1.5</Rating>
        <Rating>3</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating>
      </div>



    </div>

  );
}

export default App;




//Array.filed()