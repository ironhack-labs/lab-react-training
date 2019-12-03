import React, { Component } from 'react';
import listComplete from './data/berlin.json';
import IdCard from './components/idCard';
import Greetings from './components/greetings';
import ReactDOM from 'react-dom';
import RandomNumber from './components/random';

class App extends Component {
  constructor() {
    super();
    this.state = {
      list: listComplete,
      lang: 'en',
      min: 0,
      max: 0
    };
    this.changeLang = this.changeLang.bind(this);

    this.setMin = this.setMin.bind(this);
    this.setMax = this.setMax.bind(this);
  }
  render() {
    return (
      <div className="App">
        <h1>IdCard</h1>
        <div className="ids">
          {this.state.list.map(each => {
            return <IdCard list={each} />;
          })}
        </div>
        <h1>Greetings</h1>
        <form onChange={this.changeLang}>
          <select
            name="desiredLanguage"
            value={this.state.lang}
            onChange={this.changeLang}
          >
            <option value="am">dunno</option>
            <option value="ar">Arabic</option>
            <option value="hr">hungarian</option>
            <option value="nl">dutch</option>
            <option value="it">Italian</option>
            <option value="en">Ingrish</option>
            <option value="fr">French</option>
            <option value="de">German</option>
            <option value="be">belorussian</option>
            <option value="hi">hindi</option>
            <option value="es">Spanish</option>

            <option value="tr">turkish</option>
          </select>
        </form>
        <div id="greeting-box"></div>

        <form>
          <input
            type="number"
            name="minimum"
            onChange={event => {
              this.setMin(event.target.value);
            }}
          />

          <input
            type="number"
            name="maximum"
            onChange={event => {
              this.setMax(event.target.value);
            }}
          />

          {/* <button onClick={this.updateNum}>click me</button> */}
        </form>
        <div id="number-box">
          <RandomNumber min={this.state.min} max={this.state.max} />
        </div>
      </div>
    );
  }

  showGreeting() {
    ReactDOM.render(document.getElementById('greeting-box'));
  }

  changeLang(event) {
    this.setState({
      lang: event.target.value
    });
    setTimeout(() => {
      ReactDOM.render(
        <Greetings lang={this.state.lang} />,
        document.getElementById('greeting-box')
      );
    }, 200);
  }

  setMin(event) {
    this.setState({
      min: event
    });
  }

  setMax(event) {
    this.setState({
      max: event
    });
  }
}

export default App;
