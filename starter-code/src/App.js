import React, { Component } from "react";

const colorToHex = color => {
  var hex = color.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
};

const rgbToHex = (r, g, b) => {
  return "#" + colorToHex(r) + colorToHex(g) + colorToHex(b);
};

const BoxColor = props => {
  const { r, g, b } = props;
  const rgbStyle = {
    backgroundColor: `rgb(${r}, ${g}, ${b})`
  };
  const hexColor = rgbToHex(r, g, b);
  return (
    <div className="card card-center" style={rgbStyle}>
      <p>{`rgb(${r}, ${g}, ${b})`}</p>
      <p>{hexColor}</p>
    </div>
  );
};

const Random = props => {
  let random = Math.floor(
    Math.random() * (props.max - props.min + 1) + props.min
  );
  return (
    <div className="card">
      Random value between {props.min} and {props.max} => {random}
    </div>
  );
};

const greetingsCheck = lang => {
  let str = "";
  switch (lang) {
    case "de":
      str = "Hallo";
      break;
    case "fr":
      str = "Bonjour";
      break;
    case "es":
      str = "¡Hola!";
      break;
    case "en":
      str = "Hello";
      break;
    default:
      str = "Hello";
      break;
  }

  return str;
};

const Greetings = props => {
  return (
    <div className="card">
      {greetingsCheck(props.lang)} {props.children}
    </div>
  );
};

const IdCard = props => {
  let date = props.birth.toDateString();
  return (
    <div className="card card-flex">
      <img src={props.picture} alt={`${props.firstName} ${props.lastName}`} />
      <div className="card-right">
        <strong>First name:</strong> {props.firstName}
        <br />
        <strong>Last name:</strong> {props.lastName}
        <br />
        <strong>Gender:</strong> {props.gender}
        <br />
        <strong>Height:</strong> {props.height}
        <br />
        <strong>Birth:</strong> {date}
      </div>
    </div>
  );
};

const cardTypeCheck = type => {
  let src = "";
  switch (type) {
    case "Visa":
      src = "./img/visa.png";
      break;
    case "Master Card":
      src = "./img/master-card.svg";
      break;
    default:
      src = "";
      break;
  }

  return src;
};

const CreditCard = props => {
  let { bgColor, color } = props;

  const cardStyle = {
    backgroundColor: `${bgColor}`,
    color: `${color}`
  };

  let convertedNum = [...props.number]
    .map((num, index, arr) => {
      if (index < arr.length - 4) {
        return "*";
      }
      return num;
    })
    .join("");

  return (
    <div className="card-credit" style={cardStyle}>
      <div className="type">
        <img src={cardTypeCheck(props.type)} alt={props.type} />
      </div>
      <div className="number">{convertedNum}</div>
      <div className="expires-bank">
        <span>
          Expires {props.expirationMonth}/{props.expirationYear}
        </span>
        <span className="bank">{props.bank}</span>
      </div>
      <div className="owner">{props.owner}</div>
    </div>
  );
};

const getRating = num => {
  let str = "";

  for (let i = 0; i <= 5; i++) {
    str += num >= 0.5 + i ? "✭" : `✰`;
  }

  return str;
};

const Rating = props => {
  let rating = props.children;

  return <div className="rating">{getRating(rating)}</div>;
};

const DriverCard = props => {
  let rating = props.rating;
  return (
    <div className="card-driver card-flex">
      <img src={props.img} alt={props.name} />
      <div className="card-right">
        <h2>{props.name}</h2>
        <div className="rating">{getRating(rating)}</div>
        <p>
          {props.car.model} - {props.car.licensePlate}
        </p>
      </div>
    </div>
  );
};

class LikeButton extends Component {
  state = {
    counter: 0,
    bgColor: this.getRandomColor
  };

  updateState = () => {
    this.setState({
      counter: this.state.counter + 1,
      bgColor: this.getRandomColor()
    });
  };

  getRandomNum = num => {
    return Math.floor(Math.random() * num) + 1;
  };

  getRandomColor = () => {
    const colors = ["purple", "blue", "green", "yellow", "orange", "red"];
    let prevColor = "";
    let randomColor = this.getRandomNum(colors.length);
    prevColor = colors[randomColor];

    while (prevColor === randomColor) {
      randomColor = this.getRandomNum(colors.length);
    }

    return colors[randomColor];
  };

  render() {
    return (
      <button
        onClick={this.updateState}
        style={{ backgroundColor: `${this.getRandomColor()}`, color: "#fff" }}
      >
        {this.state.counter} Likes
      </button>
    );
  }
}

class ClickablePicture extends Component {
  state = {
    isClicked: false
  };

  handleClick = () => {
    this.setState({
      isClicked: !this.state.isClicked
    });
  };

  render() {
    return (
      <img
        src={this.state.isClicked ? this.props.imgClicked : this.props.img}
        onClick={this.handleClick}
        width="200"
        height="200"
        alt="Click me!"
      />
    );
  }
}

class Dice extends Component {
  state = {
    img: `${this.getRandomNum()}`
  };

  getRandomNum() {
    return Math.floor(Math.random() * 6) + 1;
  }

  handleClick = () => {
    this.setState({
      img: `-empty`
    });
    setTimeout(_ => {
      this.setState({
        img: `${this.getRandomNum()}`
      });
    }, 1000);
  };

  render() {
    return (
      <img
        src={`./img/dice${this.state.img}.png`}
        onClick={this.handleClick}
        width="200"
        height="200"
        alt="Dice"
      />
    );
  }
}

class Carousel extends Component {
  state = {
    currentIndex: 0
  };

  decreaseItem = () => {
    this.setState({
      currentIndex:
        (this.state.currentIndex + 1 + this.props.imgs.length) %
        this.props.imgs.length
    });
  };

  increaseItem = () => {
    this.setState({
      currentIndex:
        (this.state.currentIndex - 1 + this.props.imgs.length) %
        this.props.imgs.length
    });
  };

  render() {
    return (
      <div className="carousel">
        <button onClick={this.decreaseItem}>Left</button>
        <img
          src={this.props.imgs[this.state.currentIndex]}
          alt="Carousel item"
        />
        <button onClick={this.increaseItem}>Right</button>
      </div>
    );
  }
}

const NumbersTable = () => {
  return (
    <ul className="list">
      {[...Array(13).keys()].slice(1).map((el, index) => (
        <li className={`${index % 2 === 0 && "red"}`} key={index}>
          {el}
        </li>
      ))}
    </ul>
  );
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>IdCard</h1>
        <IdCard
          lastName="Doe"
          firstName="John"
          gender="male"
          height={178}
          birth={new Date("1992-07-14")}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />
        <IdCard
          lastName="Delores "
          firstName="Obrien"
          gender="female"
          height={172}
          birth={new Date("1988-05-11")}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />

        <h1>Greetings</h1>
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>

        <h1>Random</h1>
        <Random min={1} max={6} />
        <Random min={1} max={100} />

        <h1>BoxColor</h1>
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />

        <h1>CreditCard</h1>
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

        <h1>Rating</h1>
        <Rating>0</Rating>
        <Rating>1.49</Rating>
        <Rating>1.5</Rating>
        <Rating>3</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating>

        <h1>DriverCard</h1>
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

        <h1>LikeButton</h1>
        <LikeButton />
        <LikeButton />

        <h1>ClickablePicture</h1>
        <ClickablePicture
          img="./img/persons/maxence.png"
          imgClicked="./img/persons/maxence-glasses.png"
        />

        <h1>Dice</h1>
        <Dice />

        <h1>Carousel</h1>
        <Carousel
          imgs={[
            "https://randomuser.me/api/portraits/women/1.jpg",
            "https://randomuser.me/api/portraits/men/1.jpg",
            "https://randomuser.me/api/portraits/women/2.jpg",
            "https://randomuser.me/api/portraits/men/2.jpg"
          ]}
        />

        <h1>NumbersTable</h1>
        <NumbersTable limit={12} />
      </div>
    );
  }
}

export default App;
