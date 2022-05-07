import Rating from "./Rating";

function DriverCard(props) {

    return(
        <div style={{
            'backgroundColor': '#618EE1',
            'color': 'white',
            'pagging': '2rem',
            width: '800px',
            marginTop: '2rem',
            marginLeft: '2rem',
            borderRadius: '10px',
        }}  className="DriverCard">
            <div style={{
                display: 'flex',
                justifyContent: 'center',

            }}>
                <div style={{width: '100px'}}>
                    <img src={props.img} alt="driver" style={{width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover', margin: '1rem' }} />                
                </div>
                <div style={{display: 'flex', flexDirection: 'column', paddingLeft: '2.5rem'}}  className="driverCardInfo">
                    <h2>{props.name}</h2>
                    <p><Rating>{props.rating}</Rating></p>
                    <p>{props.car.model} - {props.car.licensePlate}</p>
                </div>
            </div>
        </div>
    );

}

export default DriverCard;