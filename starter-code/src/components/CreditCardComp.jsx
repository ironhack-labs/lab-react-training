import React, {Component} from 'react';
import visa from '../img/visa.png';
import master from '../img/master-card.svg';

class CreditCardComp extends Component {
  render () {
    return (
      <React.Fragment>
        <div className="flex-row p-2 col-sm-4 rounded-50">
          {/* <div className="flex-row col-sm-5 card"> */}
          <div className={` ${this.props.bgColor} ${this.props.color}`}>
            <img
              src={visa}
              alt="visa card"
              width="50px"
              className="float-right"
            />
            <h5 className="card-title align-middle">{this.props.number}</h5>
            <p className="card-text">
              Expires
              {this.props.expirationMonth}
              /
              {this.props.expirationYear}
              <span className="justify-content-around">
                {this.props.bank}
              </span>
            </p>
            <p>{this.props.owner}</p>
          </div>
        </div>
        {/* </div> */}
      </React.Fragment>
    );
  }
}

export default CreditCardComp;
// !!!! here to creare props.children kus sisus on sees ning Card comp on juba layout'iga
