import React from 'react';
import { SingleCreditCard } from './SingleCreditCard';

class CreditCard extends React.Component {
  render() {
    return (
      <>
        <h1>Credit Card</h1>
        <div className="section credit">
          <SingleCreditCard />
        </div>
      </>
    );
  }
}

export { CreditCard };
