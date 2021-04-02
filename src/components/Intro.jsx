import React from 'react';
import '../assets/css/Intro.css'
import CardBox from './CardBox'
import Greetings from './Greetings'
import Random from './Random'
import BoxColor from './BoxColor';
import CreditCard from './CreditCard'
import Rating from './Rating';
import DriverCard from './DriverCard'
import LikeButton from './LikeButton';
import ClickablePicture from './ClickablePicture'

const Intro = () => {
    return (
        <div className="Intro">
            <div className="container">

                <h1>Iteration 1</h1>
                <CardBox/>

                <h1>Iteration 2</h1>
                <Greetings
                    lang = 'en'
                    text = 'Alex'
                />
                <Greetings
                    lang='es'
                    text='Edu'
                />

                <h1>Iteration 3</h1>
                <Random
                    min={5}
                    max={20}
                />
                <Random
                    min={70}
                    max={100}
                />

                <h1>Iteration 4</h1>
                <BoxColor
                    r={255}
                    g={0}
                    b={0}
                />
                <BoxColor
                    r={128}
                    g={255}
                    b={45}
                />

                <h1>Iteration 5</h1>
                <div className="credit__card">
                    <CreditCard
                        type="Visa"
                        number="0123456789018845"
                        expirationMonth={3}
                        expirationYear={2021}
                        bank="BNP"
                        owner="Maxence Bouret"
                        bgColor="#11aa99"
                        color="white" />

                    <CreditCard
                        type="Master Card"
                        number="0123456789010995"
                        expirationMonth={3}
                        expirationYear={2021}
                        bank="N26"
                        owner="Maxence Bouret"
                        bgColor="#eeeeee"
                        color="#222222" />

                    <CreditCard
                        type="Visa"
                        number="0123456789016984"
                        expirationMonth={12}
                        expirationYear={2019}
                        bank="Name of the Bank"
                        owner="Firstname Lastname"
                        bgColor="#ddbb55"
                        color="white" />
                </div>

                <h1>Iteration 6</h1>
                    <Rating>0</Rating>
                    <Rating>1.49</Rating>
                    <Rating>1.5</Rating>
                    <Rating>3</Rating>
                    <Rating>4</Rating>
                    <Rating>5</Rating>

                <h1>Iteration 7</h1>    
                    <DriverCard
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
                <h1>Iteration 8</h1>        
                   <LikeButton/>
                
                <h1>Iteration 9 </h1>
                <ClickablePicture
                    img='/img/persons/maxence.png'
                    imgClicked='/img/persons/maxence-glasses.png'
                />
            </div>
        </div>
    )
}

export default Intro