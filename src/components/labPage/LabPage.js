import React from 'react'
import IdCard from '../IdCard'
import Greetings from '../Greetings'
import Random from '../Random'
import BoxColor from '../BoxColor'
import CreditCard from '../CreditCard'
import Rating from '../Rating'
import DriverCard from '../DriverCard'
import LikeButton from '../LikeButton'
import Clickablepicture from '../ClickablePicture'
import picture from "../../assets/images/maxence.png"
import picture2 from "../../assets/images/maxence-glasses.png"
import Dice from '../Dice'
import Carousel from '../Carousel'
import NumbersTable from '../NumbersTable'
import FaceBook from '../FaceBook'
import SignupPage from '../SignupPage'
import {RGBColorPicker} from '../RGBColorPicker'

export default function LabPage() {
  return (
    <div className='container'>
        <h1>LAB PAGE</h1>

        {/* RGBColorPicker */}
        <div>
        <hr />
        <RGBColorPicker/>
        </div>

        {/* FORM */}
        <div>
        <hr />
        <SignupPage/>
        </div>


        {/* FACEBOOK */}
        <div>
        <hr />
        <FaceBook/>
        </div>


        {/* DICE */}
        <div>
        <hr />
        <NumbersTable limit={12} />
        </div>

        {/* CAROUSEL */}
        <div>
        <hr />
        <Carousel
            images={[
                'https://randomuser.me/api/portraits/women/1.jpg',
                'https://randomuser.me/api/portraits/men/1.jpg',
                'https://randomuser.me/api/portraits/women/2.jpg',
                'https://randomuser.me/api/portraits/men/2.jpg'
            ]}
            />
        </div>


        {/* DICE */}
        <div>
        <hr />
        <Dice />
        </div>

        {/* CLIKABLE PICTURE */}
        <div>
        <hr />
        <Clickablepicture
            img={picture}
            img2={picture2}
            />
        </div>


        {/* LIKE */}
        <div>
        <hr />
        <LikeButton />
        </div>


        {/* DRIVER CARD */}
        <div>
        <hr />
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


        {/* RATINGS */}
        <div>
        <hr />
        <Rating>0</Rating>
        <Rating>1.49</Rating>
        <Rating>1.5</Rating>
        <Rating>3</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating>
        </div>


        {/* CREDIT CARD*/}
        <hr />
        <div className='d-flex '>
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
        
        {/* BOX COLOR*/}
        <div>
        <hr />
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />
        </div>

        {/* RANDOM */}
        <div>
        <hr />
        <Random min={1} max={6}/>
        <Random min={1} max={100}/>
        </div>

        {/* GREETINGS */}
        <div>
        <hr />
        <Greetings lang="de">Ludwig </Greetings>
        <Greetings lang="it">Mondo </Greetings>
        </div>

        {/*  ID CARD  */}
        <div>
        <hr />
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
    </div>
  )
}
