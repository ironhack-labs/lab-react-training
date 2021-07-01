import CreditCard from "./CreditCard";

import './ListCreditCards.css';

const ListCreditCards = ({title}) => {
    return (
        <article className="ListCreditCards">
            <h2>{title}</h2>
            <section className="ListCreditCards__wrapper">
                <CreditCard
                type="Visa"
                number="0123456789018845"
                expirationMonth={3}
                expirationYear={2021}
                bank="BNP"
                owner="Notorious B.I.G."
                bgColor="#11aa99"
                color="white"
                />
                <CreditCard
                type="Master Card"
                number="0123456789010995"
                expirationMonth={3}
                expirationYear={2021}
                bank="N26"
                owner="Big Papa"
                bgColor="#eeeeee"
                color="#222222"
                />
                <CreditCard
                type="Visa"
                number="0123456789016984"
                expirationMonth={12}
                expirationYear={2019}
                bank="Name of the Bank"
                owner="Biggie Smalls"
                bgColor="#ddbb55"
                color="white"
                />
            </section>
      </article>
    );
}
 
export default ListCreditCards;