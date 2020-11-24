import React from 'react'
import CreditCard from "./CreditCard"

const CreditCardList = (props) => {
    const showCreditCards = () =>
    props.creditCardList.map((creditCard) => (
        <CreditCard 
            creditCard={creditCard}
        />
    ));
    return showCreditCards();
}

export default CreditCardList;