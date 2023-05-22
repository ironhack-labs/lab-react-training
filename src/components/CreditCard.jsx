const CreditCard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) => {
    const cardBox = {
        backgroundColor: bgColor,
        color: color,
        borderRadius: '10px',
        width: '300px',
        height: '160px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        margin: '10px',
        fontFamily: 'Arial, sans-serif',
    };

    const logoPosition = {
        alignSelf: 'flex-end',
        padding: '0'
    };

    const cardNumberPosition = {
        alignSelf: 'center',
        fontSize: '20px',
        width: '100%',
    };

    const expirePosition = {
        alignSelf: 'flex-start',
        fontSize: '15px',
        textAlign: 'left',
        marginBottom: '15px'
    }

    const logo = {
        margin: '15px'
    }

    const cardNum = {
        margin: '8px',
        fontSize: '150%'
    }

    const paragraph = {
        margin: '5px 15px',
        fontSize: '90%'
    }

    const expirationDate = {
        marginRight: '20px'
    }

    return (
        <div style={cardBox}>
            <div style={logoPosition}>
                <p style={logo}>{type}</p>
            </div>
            <div style={cardNumberPosition}>
                <p style={cardNum}>&bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; {number.slice(-4)}</p>
            </div>
            <div style={expirePosition}>
                <p style={paragraph}><span style={expirationDate}>Expires {expirationMonth}/{expirationYear}</span> {bank}</p>
                <p style={paragraph}>{owner}</p>
            </div>
        </div>
    );
};

export default CreditCard;
