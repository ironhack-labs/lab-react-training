import React from 'react';
import logo from './logo.svg';
import './App.css';

function IdCard(props) {
  return (
    <div className="card">
      <img src={props.picture} alt="user" />
      <section className="infos">
        <p><strong>First name:</strong> {props.firstName}</p>
        <p><strong>Last name:</strong> {props.lastName}</p>
        <p><strong>Gender:</strong> {props.gender}</p>
        <p><strong>Height:</strong> {props.height}</p>
        <p><strong>Birth:</strong> {props.birth}</p>
      </section>
    </div>
  );
}

function Greetings(props1, props2) {
  return (
    <div className="card">
      <p>{props1.lang} {props2.name}</p>
    </div>
    
  )
}


class LikeButton extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      numberOfLikes: 0,
    }
  }


  increaseCounter = () => {
    console.log("likes")
    this.setState((prevState, props)=>{
      return {numberOfLikes: prevState.numberOfLikes + 1}
    })
  }

  render() {
    return (
      <header>
        <h1>{this.props.title}</h1>
        
        <button onClick={this.increaseCounter}><p>{this.state.numberOfLikes} Likes</p></button>
      </header>
    );
  }
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
          birth='1992-07-14'
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />

        <IdCard
          lastName="Delores "
          firstName="Obrien"
          gender="female"
          height="172"
          birth='1988-05-11'
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />
      </section>
      <section className="Iteration 2">
        <Greetings lang="de" name="Ludwig"/>
        <Greetings lang="fr" name="Francois"/>
      </section>

      <section className="Iteration 8">
        <LikeButton/>
      </section>
    </div>
    
  );
}

export default App;
