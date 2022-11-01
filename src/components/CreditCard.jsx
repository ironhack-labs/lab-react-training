import visa from '../assets/images/visa.png'
// import master from '../assets/images/master-card.svg'

function CreditCard(props) {
  return (
      <div style={{ backgroundColor: `${props.bgColor}`, maxWidth: '500px', borderRadius: '10px'}}>
      <div style={{color: props.color === 'white' ? 'white' : 'black'}}>
      <div style={{display: 'flex', justifyContent: 'end', padding: '20px'}}>
      <img src={props.type === 'Visa' ? visa : 'visa'} alt="img" width={'100px'} style= {{alignItems:'flex-end'}} />
      </div>

        <p style={{display: 'flex', paddingLeft: '10px', fontSize:'1.5rem'}}>{props.number}</p>
        <div style={{display: 'flex', gap: '20px', paddingLeft: '10px'}}>
        <p>Expiration {props.expirationMonth}/{props.expirationYear}</p>
        <p>{props.bank}</p>
        </div>
        <p style={{display: 'flex', padding: '10px'}}>{props.owner}</p>
      </div>
    </div>
  );
}

export default CreditCard;
