import './App.css';
import IdCard from './components/IdCard';
import './components/IdCard.css'
import Greetings from './components/Greetings';
import './components/Greetings.css'
import Random from './components/Random';
import './components/Random.css'
import BoxColor from './components/BoxColor';
import './components/BoxColor.css'
import CreditCard from './components/CreditCard';
import './components/CreditCard.css';
import Rating from './components/Rating';
import './components/Rating.css'
import DriverCard from './components/DriverCard';
import './components/DriverCard.css'

function App() {
    return (
        <div className="App">
            <h1>Iteration 1: IdCard</h1>
            <div>
                <IdCard
                    lastName='Doe'
                    firstName='John'
                    gender='male'
                    height={178}
                    birth={new Date("1992-07-14")}
                    picture="https://randomuser.me/api/portraits/men/44.jpg"/>
                <IdCard
                    lastName='Delores '
                    firstName='Obrien'
                    gender='female'
                    height={172}
                    birth={new Date("1988-05-11")}
                    picture="https://randomuser.me/api/portraits/women/44.jpg"/>
            </div>
            <div>
                <h1>Iteration 2: Greetings</h1>
                <Greetings lang="de">Ludwig</Greetings>
                <Greetings lang="fr">François</Greetings>
                <Greetings lang="es">Juan</Greetings>
                <Greetings lang="en">Henry</Greetings>
            </div>
            <div>
                <h1>Iteration 3: Random</h1>
                <Random min={1} max={6}/>
                <Random min={1} max={100}/>
            </div>
            <div>
                <h1>Iteration 4: Colors</h1>
                <BoxColor r={255} g={0} b={0}/>
                <BoxColor r={128} g={255} b={0}/>
            </div>
            <div>
                <h1>Iteration 5: Credit Card</h1>
                <div className="cards">

                    <CreditCard
                        type="Visa"
                        number="0123456789018845"
                        expirationMonth={3}
                        expirationYear={2021}
                        bank="BNP"
                        owner="Maxence Bouret"
                        bgColor="#11aa99"
                        color="white"/>

                    <CreditCard
                        type="Master Card"
                        number="0123456789010995"
                        expirationMonth={3}
                        expirationYear={2021}
                        bank="N26"
                        owner="Maxence Bouret"
                        bgColor="#eeeeee"
                        color="#222222"/>

                    <CreditCard
                        type="Visa"
                        number="0123456789016984"
                        expirationMonth={12}
                        expirationYear={2019}
                        bank="Name of the Bank"
                        owner="Firstname Lastname"
                        bgColor="#ddbb55"
                        color="white"/>
                </div>
            </div>
            <div>
                <h1>Iteration 6: Rating</h1>
                <Rating>0</Rating>
                <Rating>1.49</Rating>
                <Rating>1.5</Rating>
                <Rating>3</Rating>
                <Rating>4</Rating>
                <Rating>5</Rating>
            </div>
            <div>
                <h1>Iteration 7: DriverCard</h1>
                <div className='card'>
                    <DriverCard
                        name="Travis Kalanick"
                        rating={4.2}
                        img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
                        car={{
                        model: "Toyota Corolla Altis",
                        licensePlate: "CO42DE"
                    }}/>

                    <DriverCard
                        name="Dara Khosrowshahi"
                        rating={4.9}
                        img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
                        car={{
                        model: "Audi A3",
                        licensePlate: "BE33ER"
                    }}/>
                </div>
            </div>
        </div>
    );
}

export default App;
