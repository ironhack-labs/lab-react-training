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
class App extends Component {

  state={
    ratingChecked : true
  }

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
            <h1 className="title">Greetings</h1>

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
              <h1>Rating component</h1>
              <Rating>0</Rating>
              <Rating>1.49</Rating>
              <Rating>1.5</Rating>
              <Rating>3</Rating>
              <Rating>4</Rating>
              <Rating>5</Rating>
            </div>
        </section> 
        
       
      </div>
    );
  }
}

export default App;
