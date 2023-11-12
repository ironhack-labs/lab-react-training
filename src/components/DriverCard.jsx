import Rating from "./Rating";

function DriverCard(props) {
    const DriverCardStyle = {
        backgroundColor: '#425cbb',
        minHeight: '100px',
        margin: '10px',
        borderRadius: '10px',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '20px',
        paddingBottom: '20px'
    }

    const imageContainerStyle = {
        width: '30%',
    }

    const driversImageStyle = {
        height: '100px',
        width: '100px',
        borderRadius: '50%',
        marginLeft: '200px',
    }

    const infoContainerStyle = {
        width: '50%',

    }

    const pStyle = {
        color: 'white',
        margin: '0',
        fontWeight: 'bold',
        fontSize: 'large',
        textAlign: 'left',
    }

    return (
        <div style={DriverCardStyle}>
            <div style={imageContainerStyle}><img src={props.img} alt="Drivers Picture" style={driversImageStyle} /></div>
            <div style={infoContainerStyle}>
                <p style={pStyle}>{props.name}</p>
                <div style={pStyle}><Rating stars={props.rating} /></div>
                <p style={pStyle}>{props.car.model} - {props.car.licensePlate}</p>
            </div>
        </div>
    )
}

export default DriverCard;