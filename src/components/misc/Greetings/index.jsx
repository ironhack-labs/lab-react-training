import React from 'react';
import './index.css';

class Greetings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      language: 'esp',
      welcome: 'Hola',
    };
  }

  handleLanguageES = () => {
    this.setState({
      language: 'esp',
      welcome: 'Hola',
    });
  };

  handleLanguageEN = () => {
    this.setState({
      language: 'en',
      welcome: 'Hello',
    });
  };

  handleLanguageFR = () => {
    this.setState({
      language: 'fr',
      welcome: 'Bonjour',
    });
  };

  render() {
    return (
      <div className="Greetings">
        <p>intenté ser creativa pero no</p>
        {/* <div className="greeting-welcome">
          <h2 lang={this.language}>{this.welcome}, </h2>
        </div>
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Select language
          </button>
          <ul className="dropdown-menu">
            <li>
              <a onClick={this.handleLanguageES} class="dropdown-item" href="#">
                ES
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                EN
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                FR
              </a>
            </li>
          </ul>
        </div> */}
      </div>
    );
  }
}

export default Greetings;
