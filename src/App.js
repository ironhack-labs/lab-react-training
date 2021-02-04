import { render } from '@testing-library/react';
import React from 'react';
import './App.css';
import Rating from './components/Rating'
import DriverCard from './components/DriverCard'
import LikeButton from './components/LikeButton'


import visaLogo from './img/visa.png';
import masterCardLogo from './img/master-card.svg';
import ClickablePicture from './components/ClickablePicture';


//////Iteration1//////
class IdCardCom extends React.Component {
  render() {
    return(
      <div>
        <span>
          <div id="left">
          <img src={this.props.picture}></img>
          </div>
          <div id="right">
            <p><strong>First name: </strong>{this.props.firstName}</p>
            <p><strong>Last name: </strong>{this.props.lastName}</p>
            <p><strong>Gender: </strong>{this.props.gender}</p>
            <p><strong>Height: </strong>{this.props.height}</p>
            {/* <p><strong>Birth</strong>{this.props.birth}</p> */}
          </div>
        </span>
      </div>
    )
  }
}


//////Iteration2//////
function LangFr(props) {
  return(
  <div style={{width: "800px", height:"80px", margin: "10px", border: "1px solid black" }}>
  <h1>Bonjour François</h1>
  </div>
  )
}

function LangDe(props) {
  return (
    <div style={{width: "800px", height:"80px", margin: "10px", border: "1px solid black" }}>
    <h1>Hallo Ludwig</h1>
    </div>
  )
}

function Greetings(props) {
    const language = props.lang;
    if (language === "fr" ) {
      return <LangFr />
    }
    return <LangDe /> 
  }

//////Iteration3//////


function Random (props) {
    const min = props.min;
    const max = props.max;
    const rand = Math.trunc (Math.random() * (max - min));

    return(
    <div style={{width: "800px", height:"80px", margin: "10px", border: "1px solid black" }}>
    <h1>Random value between {props.min} and {props.max} => {rand}</h1>
    </div>
    )
}

//////Iteration4//////

function BoxColor (props) {

  function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  }
  const hex = ("#" + componentToHex(props.r) + componentToHex(props.g) + componentToHex(props.b))
  
  return(
    <div style={{backgroundColor: `${hex}`, width: "800px", height:"150px", margin: "10px", border: "1px solid black" }}>
    <h3 style={{padding: "30px 40%"}}>rgb({props.r},{props.g},{props.b}) {hex}</h3>
    </div>
  )
}

//////Iteration5//////


function CreditCard (props) {
  const cardTypeToLogo = {
    'Master Card': masterCardLogo,
    'Visa': visaLogo};

    function fourNum (num) {
      return "xxxx xxxx xxxx " + num.substr(num.length-4)
    }

    
  return(
    <div className='credit-card {props.bgColor}' style={{backgroundColor: [props.bgColor]}}>
    <div className='credit-card__logo'>
        <img className='cardlogo' src={cardTypeToLogo[props.type]} width="30px"/>
    </div>

    <div className='credit-card__number'>{fourNum(props.number)}</div>
    
    <div className='credit-card__info'>
        <div className='credit-card__info_name'>
            <div className='credit-card__info_label'>{props.owner}</div>
            <div>{props.bank}</div>
        </div>

        <div className='credit-card__info_expiry'>
            <div className='credit-card__info_label'>VALID UP TO</div>
            <div>{props.expirationMonth}/{props.expirationYear}</div>
        </div>
    </div>
    </div>
  )
}
/////////////////////



//////Iteration7//////


/////////////////////


function App() {
  return (
  <div>  
    <div>
      <div style={{width: "800px", height:"200px", margin: "10px", border: "1px solid black" }}>
        <IdCardCom
          lastName='Doe'
          firstName='John'
          gender='male'
          height={178}
          birth={new Date("1992-07-14")}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        /> 
      </div>
        <div style={{width: "800px", height:"200px", margin: "10px", border: "1px solid black" }}>
          <IdCardCom
          lastName='Delores '
          firstName='Obrien'
          gender='female'
          height={172}
          birth={new Date("1988-05-11")}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
          />
        </div>
      </div>  
      <div>
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>
      </div>
      <div>
        <Random min={1} max={6}/>
        <Random min={1} max={100}/>
      </div>
      <div>
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />
      </div>
      <div>
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
      <div>
       <Rating ratingNr={0}/>
       <Rating ratingNr={1}/>
       <Rating ratingNr={2.2}/>
       <Rating ratingNr={4.8}/>
      </div>

      <div>
      <div>
      <DriverCard
        name="Travis Kalanick"
        rating={4.2}
        img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
        car={{
          model: "Toyota Corolla Altis",
          licensePlate: "CO42DE"
        }} />
        </div>
        <div>
      <DriverCard
        name="Dara Khosrowshahi"
        rating={4.9}
        img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
        car={{
          model: "Audi A3",
          licensePlate: "BE33ER"
        }} />
        </div>
      </div>

      <div>
      <p><LikeButton /> <LikeButton /></p>
      </div>

      <div>
      <ClickablePicture />
      </div>
  </div>
  );
}

export default App;