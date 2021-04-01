import React from 'react';
import '../assets/css/Intro.css'
import CardBox from './CardBox'
import Greetings from './Greetings'
import Random from './Random'
import BoxColor from './BoxColor';
import CreditCard from './CreditCard'

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
            </div>
        </div>
    )
}

export default Intro