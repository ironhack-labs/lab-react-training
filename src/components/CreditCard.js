function CreditCard(props) {
  console.log()
  let fourLast = props.number.slice(12);
  return (
    <div className="border credit-card">
      <FontAwesomeIcon icon="fa-brands fa-cc-visa" />
      <p>{fourLast}</p>
    </div>
  );
}

export default CreditCard;
