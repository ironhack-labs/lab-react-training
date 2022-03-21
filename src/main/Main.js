import Greetings from '../components/Greetings/Greetings';
import IdCards from '../components/IdCards/IdCards';
import Random from '../components/Random/Random'
import BoxColor from '../components/BoxColor/BoxColor'
import CreditCard from '../components/CreditCard/CreditCard';
import Rating from '../components/Rating/Rating'


function Main() {
    return (
        <div className="App mx-2">

            {/* IDCARDS */}
            <div>
                <IdCards lastName='Doe'
                    firstName='John'
                    gender='male'
                    height={178}
                    birth={new Date("1992-07-14")}
                    picture="https://randomuser.me/api/portraits/men/44.jpg"
                />
                <IdCards
                    lastName='Delores '
                    firstName='Obrien'
                    gender='female'
                    height={172}
                    birth={new Date("1988-05-11")}
                    picture="https://randomuser.me/api/portraits/women/44.jpg"
                />
            </div>

            {/* GREETINGS */}
            <div className='mt-4'>
                <h1 className='text-start'> <strong>Greetings</strong></h1>
                <Greetings lang="de">Ludwig</Greetings>
                <Greetings lang="fr">François</Greetings>
            </div>

            {/* RANDOM */}

            <div className='mt-4'>
                <h1 className='text-start'><strong>Random</strong></h1>
                <Random min={1} max={6} />
                <Random min={1} max={100} />
            </div>

            {/* BOX-COLOR */}
            <div className='mt-4'>
                <h1 className='text-start'><strong>Box Color</strong></h1>
                <BoxColor r={255} g={0} b={0} />
                <BoxColor r={128} g={255} b={0} />
            </div>

            {/* CREDIT-CARD */}
            <h1 className='text-start mt-4'><strong>CreditCard</strong></h1>
            <div className='d-flex justify-content-around me-2'>
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

            {/* RATING */}
            <h1 className='text-start mt-4'><strong>Rating</strong></h1>
            <div className='text-start mt-4'>
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

export default Main;

