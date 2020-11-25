import './App.css';
import React from 'react';

export default class Slide extends Component {
    constructor(props) {
      super(props);
      this.state = {landing: landingData};
    }
  render() {
      return(
        <section>
        {
          this.state.landing.map((s, index) =>
            <div className={
              index === this.props.activeIndex ? 'active' : 'slide'}
              key={index}>
                <h1>{s.title}</h1>
                <p>{s.description}</p>
            </div>
          ) }
          </section>
      )
    }
  }