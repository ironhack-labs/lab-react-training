import React from 'react';
import './App.css';
import BoxColor from './components/box-color/BoxColor';
import ClickablePicture from './components/clickable-picture/ClickablePicture';
import CreditCard from './components/credit-card/CreditCard';
import DriverCard from './components/driver-card/DriverCard';
import Greetings from './components/greetings/Greetings';
import IdCard from './components/id-card/IdCard';
import LikeButton from './components/like-button/LikeButton';
import Random from './components/random/Random'
import Rating from './components/rating/Rating';

function App() {
    return (
        <div className="d-flex flex-column align-items-center justify-content-center">
            <div>
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
            <hr />
            <Greetings lang="de">Ludwig</Greetings>
            <Greetings lang="fr">François</Greetings>
            <hr />
            <Random min={1} max={6} />
            <Random min={1} max={100} />
            <hr />
            <BoxColor r={255} g={0} b={0} />
            <BoxColor r={128} g={255} b={0} />
            <hr />
            <div className="row container d-flex justify-content-center py-5">
                <CreditCard
                    className="col-3"
                    type="Visa"
                    number="0123456789018845"
                    expirationMonth={3}
                    expirationYear={2021}
                    bank="BNP"
                    owner="Maxence Bouret"
                    bgColor="#11aa99"
                    color="white" />
                <CreditCard
                    className="col-3 mx-2"
                    type="Master Card"
                    number="0123456789010995"
                    expirationMonth={3}
                    expirationYear={2021}
                    bank="N26"
                    owner="Maxence Bouret"
                    bgColor="#eeeeee"
                    color="#222222" />
                <CreditCard
                    className="col-3"
                    type="Visa"
                    number="0123456789016984"
                    expirationMonth={12}
                    expirationYear={2019}
                    bank="Name of the Bank"
                    owner="Firstname Lastname"
                    bgColor="#ddbb55"
                    color="white" />
            </div>
            <hr />
            <div className="d-flex flex-column align-items-center mb-5">
                <Rating>0</Rating>
                <Rating>1.49</Rating>
                <Rating>1.5</Rating>
                <Rating>3</Rating>
                <Rating>4</Rating>
                <Rating>5</Rating>
            </div>
            <DriverCard
                className="mb-3"
                name="Travis Kalanick"
                rating={4.2}
                img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
                car={{
                    model: "Toyota Corolla Altis",
                    licensePlate: "CO42DE"
                }} />
            <DriverCard
                name="Dara Khosrowshahi"
                rating={4.9}
                img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
                car={{
                    model: "Audi A3",
                    licensePlate: "BE33ER"
                }} />
            <div className="d-flex my-5">
                <LikeButton className="me-3" /> <LikeButton />
            </div>
            <ClickablePicture
                className="mb-5"
                img='/img/persons/maxence.png'
                imgClicked='/img/persons/maxence-glasses.png'
            />
        </div>
    );
}

export default App;
