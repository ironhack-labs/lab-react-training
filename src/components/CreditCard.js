const CreditCard = (props) => (
    <div style={{backgroundColor={props.bgColor}, borderRadius="3px", padding="6px", width="100px", height="60px"}}>
              function Visa(props){
            return './img/visa.png'
          }
  
          function MasterCard(props){
            return './img/master-card.svg'
          }
  
          function Type(props){
            const typeV = props.typeV
            if (typeV){
              return <Visa/>
            } else {
              return <MasterCard/>
            }
          }
      <img src={props.type} style={{float="right", width="15px"}}/>
      <br/>
      <h3 style={{color={props.color}, float="center"}}>{props.number}</h3>
      <br/>
      <p style={{color={props.color}, float="right"}}>Expires {props.expirationMonth}/{expiration.Year}     {props.bank}<b/>{props.owner}</p>
    </div>
  )
  