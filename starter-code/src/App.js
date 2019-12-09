import React, { Component } from 'react';
import IdCardComponent from './components/IdCard';
import BoxColorComponent from './components/BoxColors';
import CreditCardComponent from './components/CreditCard';
import DriverCardComponent from './components/DriverCard';
import ClickablePictureComponent from './components/ClickablePicture';
import DiceComponent from './components/Dice';

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>IdCard</h1>
        <IdCardComponent
          lastName='Doe'
          firstName='John'
          gender='male'
          height={178}
          birth={new Date("1992-07-14")}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />

        <IdCardComponent
          lastName='Delores '
          firstName='Obrien'
          gender='female'
          height={172}
          birth={new Date("1988-05-11")}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />


        {/* TODO: Use the IdCard component */}

        <h1>Greetings</h1>
        <GreetingComponent lang="de">Ludwig</GreetingComponent>
        <GreetingComponent lang="fr">François</GreetingComponent>
        {/* TODO: Use the Greetings component */}

        <h1>Random</h1>
        <RandomComponent min={1} max={6} />
        <RandomComponent min={1} max={100} />

        <h1>BoxColor</h1>
        <BoxColorComponent r={255} g={0} b={0} />
        <BoxColorComponent r={128} g={255} b={0} />

        <h1>CreditCard</h1>
        <div className="creditCard">
          <CreditCardComponent
            type="Visa"
            number="0123456789018845"
            expirationMonth={3}
            expirationYear={2021}
            bank="BNP"
            owner="Maxence Bouret"
            bgColor="#11aa99"
            color="white" />
          <CreditCardComponent
            type="Master Card"
            number="0123456789010995"
            expirationMonth={3}
            expirationYear={2021}
            bank="N26"
            owner="Maxence Bouret"
            bgColor="#eeeeee"
            color="#222222" />
          <CreditCardComponent
            type="Visa"
            number="0123456789016984"
            expirationMonth={12}
            expirationYear={2019}
            bank="Name of the Bank"
            owner="Firstname Lastname"
            bgColor="#ddbb55"
            color="white" />
        </div>

        <h1>Rating</h1>
        <RatingComponent>0</RatingComponent>
        <RatingComponent>1.49</RatingComponent>
        <RatingComponent>1.5</RatingComponent>
        <RatingComponent>3</RatingComponent>
        <RatingComponent>4</RatingComponent>
        <RatingComponent>5</RatingComponent>

        <h1>DriverCard</h1>
        <DriverCardComponent
          name="Travis Kalanick"
          rating={4.2}
          img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
          car={{
            model: "Toyota Corolla Altis",
            licensePlate: "CO42DE"
          }} />
        <DriverCardComponent
          name="Dara Khosrowshahi"
          rating={4.9}
          img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
          car={{
            model: "Audi A3",
            licensePlate: "BE33ER"
          }} />

        <h1>LikeButton</h1>
        <LikeButtonComponent />
        <LikeButtonComponent />

        <h1>ClickedPicture</h1>
        <ClickablePictureComponent />

        <h1>Dice</h1>
        <DiceComponent />
      </div>
    );
  }
}

export default App;