import masterCard from '../assets/images/master-card.svg';
import visa from '../assets/images/visa.png';


function CreditCard(props) {

    const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = props;
    
    let cardLogo;

    if(type === 'Visa') {
        cardLogo = visa;
    } else {
        cardLogo = masterCard;
    }

    let lastFourCardDigits = number.substring(number.length - 4);

    return(
        <div style={{
            'backgroundColor': bgColor,
            'color': color,
            'pagging': '2rem',
            width: '400px',
            marginTop: '2rem',
            marginLeft: '2rem',
            borderRadius: '10px',
        }}>
            <div style={{
                display: 'flex',
                justifyContent: 'end'
            }}>
                <img src={cardLogo} alt='card logo' style={{
                    height: '30px',
                    width: '50px',
                    marginTop: '10px',
                    marginRight: '10px'
                }}/>
            </div>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                margin: '1.5rem 0'
            }}>
                <div style={{
                    display: 'flex'
                }} className="dotContainer">
                    <div style={{
                        height: '10px',
                        width: '10px',
                        borderRadius: '50%', 
                        backgroundColor:  color         
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
                    display: 'flex'
                }} className="dotContainer">
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
                    display: 'flex'
                }} className="dotContainer">
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
                    fontSize: '1.5rem'
                }}>
                    {lastFourCardDigits}
                </div>
            </div>
                <div style={{
                        textAlign: 'left',
                        marginLeft: '2rem'
                    }}>
                    <div> Expires {expirationMonth}/{expirationYear}<span style={{ marginLeft: '2rem' }}>{bank}</span></div>
                    <div style={{ paddingBottom: '1rem', marginBottom: '1rem' }}>{owner}</div>
                </div>
        </div>
    );

}

export default CreditCard;