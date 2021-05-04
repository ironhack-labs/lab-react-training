import React, { Component } from 'react';

export default class DriverCard extends Component {
  starRating(num) {
    let numRound = Math.round(num);
    let str = '★'.repeat(numRound) + '☆'.repeat(5 - numRound);
    return str;
  }
  render() {
    return (
      <div className="columns">
        <div className="column">
          <div className="box has-background-info-dark">
            <div className="columns is-centered">
              <div className="column is-half">
                <div className="columns">
                  <div className="column is-narrow">
                    <figure className="image is-96x96">
                      <img className="is-rounded" src={this.props.img} alt="" />
                    </figure>
                  </div>
                  <div className="column">
                    <div className="content">
                      <h3 className="has-text-white">{this.props.name}</h3>
                      <p className="has-text-white">
                        {this.starRating(this.props.rating)}
                      </p>
                      <p className="has-text-white">
                        {`${this.props.car.model} - ${this.props.car.licensePlate}`}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
