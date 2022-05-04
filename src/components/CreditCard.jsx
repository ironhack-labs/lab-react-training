import masterCard from '../assets/images/master-card.svg'
import visa from '../assets/images/visa.png'


function CreditCard(props) {
  const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = props
  
  let cardLogo;

  if(type =='Visa'){
    cardLogo = visa; 
  } else {
    cardLogo = masterCard;
  }

  let lastFour = number.slice(-4)
  
  return (
    <div style={{
      'backgroundColor': bgColor,
      'color': color,
      'padding':'1rem',
      width: '400px',
      marginTop: '2rem',
      marginLeft: '2rem',
      borderRadius: '10px',
    
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'flex-end'
      }}>
        <img src={cardLogo} alt="card type logo" style={{
          height: '30px',
          width: '50px'
        }} />
      </div>

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '1rem 0',
      }}>
        <div style={{
          display: 'flex',
          marginRight: '.05rem'
        }}>
          <div style={{
            height: '10px',
            width: '10px',
            borderRadius: '50%',
            backgroundColor: color
          }}></div>
          <div style={{
            height: '10px',
            width: '10px',
            borderRadius: '50%',
            backgroundColor: color
          }}></div>
          <div style={{
            height: '10px',
            width: '10px',
            borderRadius: '50%',
            backgroundColor: color
          }}></div>
          <div style={{
            height: '10px',
            width: '10px',
            borderRadius: '50%',
            backgroundColor: color
          }}></div>
        </div>
        <div style={{
          display: 'flex',
          marginRight: '.05rem'
        }}>
          <div style={{
            height: '10px',
            width: '10px',
            borderRadius: '50%',
            backgroundColor: color
          }}></div>
          <div style={{
            height: '10px',
            width: '10px',
            borderRadius: '50%',
            backgroundColor: color
          }}></div>
          <div style={{
            height: '10px',
            width: '10px',
            borderRadius: '50%',
            backgroundColor: color
          }}></div>
          <div style={{
            height: '10px',
            width: '10px',
            borderRadius: '50%',
            backgroundColor: color
          }}></div>
        </div>
        <div style={{
          display: 'flex',
          marginRight: '.05rem'
        }}>
          <div style={{
            height: '10px',
            width: '10px',
            borderRadius: '50%',
            backgroundColor: color
          }}></div>
          <div style={{
            height: '10px',
            width: '10px',
            borderRadius: '50%',
            backgroundColor: color
          }}></div>
          <div style={{
            height: '10px',
            width: '10px',
            borderRadius: '50%',
            backgroundColor: color
          }}></div>
          <div style={{
            height: '10px',
            width: '10px',
            borderRadius: '50%',
            backgroundColor: color
          }}></div>
        </div>
        <div style={{
          fontSize:'2rem',
        }}>
          {lastFour}
        </div>
      </div>

      <div style={{
        textAlign: 'left'
      }}>
        <p>Expires {expirationMonth}/{expirationYear} <span style={{marginLeft:'1rem'}}>{bank}</span></p>
        <p>{owner}</p>
      </div>
    </div>
  )
}


export default CreditCard;