import React from 'react';

function CreditCard(props) {
  return (
    <div class="payment-card">
      <i class="fa fa-cc-visa payment-icon-big text-success"></i>
      <h2>**** **** **** 1060</h2>
      <div class="row">
        <div class="col-sm-6">
          <small>
            <strong>Expiry date:</strong> 10/16
          </small>
        </div>
        <div class="col-sm-6 text-right">
          <small>
            <strong>Name:</strong> David
          </small>
        </div>
      </div>
    </div>
  );
}

export default CreditCard;
