import React from 'react';
import './App.css';

// ITERATION 1

function IdCard(props) {
  return (
    <div className="card">
      <img src={props.picture} alt="user" />
      <section className="infos">
        <p>
          <strong>First name:</strong> {props.firstName}
        </p>
        <p>
          <strong>Last name:</strong> {props.lastName}
        </p>
        <p>
          <strong>Gender:</strong> {props.gender}
        </p>
        <p>
          <strong>Height:</strong> {props.height}
        </p>
        <p>
          <strong>Birth:</strong> {props.birth}
        </p>
      </section>
    </div>
  );
}

// ITERATION 2

// let Greetings = (props) => {
//   let Greeting = "";

//     if(props.lang === "de"){
//       Greeting = "Hallo Ludwig"
//     } else if (props.lang === "en"){
//       Greeting = "Hello Bob"
//     } else if (props.lang === "es"){
//       Greeting = "Hola Pablo"
//     } else if (props.lang === "fr"){
//       Greeting = "Bonjour Francois"
//     }

//   return (
//     <div className="card">
//       <p>
//         <Greetings />
//       </p>
//     </div>
//   );
// }

// ITERATION 3

function Random(props) {
  return (
    <p>
      Random value between {props.min} and {props.max} is = {Math.floor(Math.random() * (props.max - props.min + 1)) + props.min};
    </p>
  );
}

// ITERATION 8

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfLikes: 0,
    };
  }
  increaseCounter = () => {
    console.log('likes');
    this.setState((prevState, props) => {
      return { numberOfLikes: prevState.numberOfLikes + 1 };
    });
  };

  render() {
    return (
      <header>
        <h1>{this.props.title}</h1>

        <button onClick={this.increaseCounter}>
          <p>{this.state.numberOfLikes} Likes</p>
        </button>
      </header>
    );
  }
}

// ITERATION 5

function CreditCard(props) {
  let styles = {
    background: props.bgColor,
    color: props.color,
  };

  return (
    <div className="CreditCard" style={styles}>
      <p className="type">{props.type}</p>
      <p>{props.number}</p>
      <div className="row">
        <div className="expiration">
          <p>
            Expires {props.expirationMonth}/{props.expirationYear}
          </p>
          <p>{props.bank}</p>
        </div>
      </div>
      <p className="owner">{props.owner}</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <section className="Iteration 1">
        <IdCard
          lastName="Doe"
          firstName="John"
          gender="male"
          height="178"
          birth="1992-07-14"
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />

        <IdCard
          lastName="Delores "
          firstName="Obrien"
          gender="female"
          height="172"
          birth="1988-05-11"
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />
      </section>
      <section className="Iteration 2">
        {/* <Greetings lang="de" />
        <Greetings lang="fr" /> */}
      </section>

      <section className="Iteration 3">
        <Random min={1} max={6} />
        <Random min={1} max={100} />
      </section>

      <section className="Iteration 5">
        <div className="creditcard-container">
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
      </section>
      <section className="Iteration 8">
        <LikeButton />
      </section>
    </div>
  );
}

export default App;
