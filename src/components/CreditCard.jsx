// eslint-disable-next-line react/prop-types, no-unused-vars
const CreditCard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) => {
    return (
        <>
            <div>
                <h3>{number}</h3>
            </div>
            <div className="expiration">
                {expirationMonth}/{expirationYear} {bank}
            </div>
            <div>
                {owner}
            </div>
        </>
    );
};

export default CreditCard;  