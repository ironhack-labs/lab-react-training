import './App.css';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import Greetings from './components/Greetings';
import IdCard from './components/IdCard';
import Random from './components/Random';

function App() {
  return (
    <div className="App font-[Poppins] w-1/3 m-auto">
      <div className="IdCard">
        <p className="text-4xl font-bold text-slate-400 hover:text-slate-600 my-8 border-b-2 border-slate-400">IdCards</p>
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
      </div>

      <div className="Greetings">
        <p className="text-4xl font-bold text-slate-400 hover:text-slate-600 my-8 border-b-2 border-slate-400">Greetings</p>
        <Greetings lang="de">Noah</Greetings>
        <Greetings lang="en">James</Greetings>
        <Greetings lang="fr">Nathan</Greetings>
        <Greetings lang="es">Manolo!</Greetings>
      </div>

      <div className='Random'>
        <p className="text-4xl font-bold text-slate-400 hover:text-slate-600 my-8 border-b-2 border-slate-400">Random</p>
        <Random min={1} max={10} />
      </div>

      <div>
        <p className="text-4xl font-bold text-slate-400 hover:text-slate-600 my-8 border-b-2 border-slate-400">Box Color</p>
        <BoxColor
          color='yellow'
          intensity='200'
        />
      </div>

      <div>
        <p className="text-4xl font-bold text-slate-400 hover:text-slate-600 my-8 border-b-2 border-slate-400">CreditCard</p>
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
  );
}

export default App;
