function DriverCard(props) {
    const { name, rating, img, car } = props;
    const { model, licensePlate } = car;
    const stars = '★'.repeat(Math.round(rating)) + '☆'.repeat(5 - Math.round(rating));
    const style = {
      backgroundColor: 'white',
      color: 'black',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.3)',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: '20px',
    };
    const imgStyle = {
      width: '100px',
      height: '100px',
      borderRadius: '50%',
      marginRight: '20px',
    };
    return (
      <div style={style}>
        <img src={img} alt="driver" style={imgStyle} />
        <div>
          <h2>{name}</h2>
          <div>{stars}</div>
          <p>
            {model} - {licensePlate}
          </p>
        </div>
      </div>
    );
  }
  
  export default DriverCard;