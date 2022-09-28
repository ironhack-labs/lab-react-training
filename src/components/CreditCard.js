import visa from '../assets/images/visa.png';
function CreditCard(props) {
  return (
    <div
      class="CreditCard"
      style={{ backgroundColor: 'rgb(17, 170, 153)', color: 'white' }}
    >
      <div class="type">
        <img src={visa} />
      </div>
      <div class="number">{props.number}</div>
      <div class="expires-bank">
        <span>
          Expires {props.expirationMonth}/{props.expirationYear}{' '}
        </span>
        <span class="bank">{props.bank}</span>
      </div>
      <div class="owner">{props.owner}</div>
    </div>
  );
}
export default CreditCard;
