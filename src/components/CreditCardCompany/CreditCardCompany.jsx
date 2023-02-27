import visa from './../../assets/images/visaIcon.png'
import masterCard from './../../assets/images/masterCardIcon.png'
import "./CreditCardCompany.css"


function CreditCardCompany({ type }) {
    let imgCompany
    type === 'Visa' ? imgCompany = visa : imgCompany = masterCard
    return (
        <figure className='CreditCardCompany'>
            <img src={imgCompany} alt={type} />
        </figure>
    );
}

export default CreditCardCompany;
