import React, { Component } from 'react';
import 'bulma/css/bulma.css'
/* Data */
import {users} from './users'
import {creditCardsData} from './creditCardsData'
/*  Components */
import IdCard from './components/IdCard'
import Greetings from './components/Greetings'
import Random from './components/Random'
import BoxColor from './components/BoxColor'
import CreditCard  from './components/CreditCard'
import Rating from './components/Rating'
import DriveCard from './components/DriveCard'
import LikeButton from './components/LikeButton'
import ClickablePicture from './components/ClickablePicture'
import Dice from './components/Dice'
import Carousel from './components/Carousel'
class App extends Component {

  render() {
    return (
      <div className="App">
        <section className="section">
          <div className="container">
            <h1 className="title">IdCard</h1>
              <div className="columns is-desktop is-multiline">
                {/* TODO: Use the IdCard component */}
                {users.map( (user,i)=>{
                  return <IdCard
                    key={"user-"+i} 
                    firstName={user.firstName}
                    lastName={user.lastName}
                    gender={user.gender}
                    height={user.height}
                    birth={user.birth}
                    picture={user.picture}
                  />
                })  
                }
              </div>
       
            
            </div>

            <div className="column is-12">
            <h1 >Greetings</h1>

              <Greetings lang="de" children="Ludwig"/>
            </div>
            <div className="column is-12">
              <Greetings  lang="fr" children="Bonjour François"/>
            </div>
            <div className="column is-12">
              <h1 className="title">Random</h1>
                <Random  min={1} max={3}/>
            </div>
            <div className="column is-12">
              <Random  min={1} max={100}/>
            </div>
            <div className="column is-12">
            <h1 className="title"> BoxColor</h1>

              < BoxColor  r={255} g={0} b={0}/>
            </div>
            <div className="column is-12">
              < BoxColor  r={128} g={255} b={0}/>
            </div>
            <div>
                {creditCardsData.map((creditCard, index) =>{
                  return <CreditCard 
                  key={`credit-car-num-${index}`} 
                  type={creditCard.type}
                  number={creditCard.number}
                  expirationMonth={creditCard.expirationMonth}
                  expirationYear={creditCard.expirationYear}
                  bank={creditCard.bank}
                  owner={creditCard.owner}
                  bgColor={creditCard.bgColor}
                  color={creditCard.color}
                  />

                })}
            </div>
            <div  className="column is-12">
              <h1 className="title">Rating component</h1>
              <Rating>0</Rating>
              <Rating>1.49</Rating>
              <Rating>1.5</Rating>
              <Rating>3</Rating>
              <Rating>4</Rating>
              <Rating>5</Rating> 
            </div>
            <div className="column is-12">
              <h1>DriverCard component</h1>
              <DriveCard 
              name="Travis Kalanick"
              rating={4.2}
              img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
              car={{
                model: "Toyota Corolla Altis",
                licensePlate: "CO42DE"
              }}
              />
             
              <DriveCard 
                name="Dara Khosrowshahi"
                rating={4.9}
                img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
                car={{
                  model: "Audi A3",
                  licensePlate: "BE33ER"
                }} />
            </div>
            <div className="column is-12">
              <h1 className="title">LikeButton</h1>
                <LikeButton />
            </div>
            <div className="column is-6">
            <LikeButton />

            </div>
            <div className="column is-6">
                <ClickablePicture img="/img/persons/maxence.png"
                imgClicked="/img/persons/maxence-glasses.png"  />
            </div>
            <div className="column is-6">
              <h1 className="title">Dice component</h1>
                <Dice />
            </div>
            <div>
              <h1 className="title"> Carosel component</h1>
              <Carousel  imgs={["https://randomuser.me/api/portraits/women/1.jpg", "https://randomuser.me/api/portraits/men/1.jpg","https://randomuser.me/api/portraits/women/2.jpg", "https://randomuser.me/api/portraits/men/2.jpg"]} 
              />
            </div>
        </section> 
        
       
      </div>
    );
  }
}

export default App;
