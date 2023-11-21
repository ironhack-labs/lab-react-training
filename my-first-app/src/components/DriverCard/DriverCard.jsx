const DriverCard = ({ name, rating, img, car }) => {
    const { model, licensePlate } = car

    const roundedStars = Math.round(rating);
    const fullStars = '★'.repeat(roundedStars);
    const emptyStars = '☆'.repeat(5 - roundedStars);

    return (
        <div style={{
            padding: '16px',
            display: 'flex',
            alignItems: 'center'
        }}>
            <img src={img} alt={name} style={{ width: '100px' }} />
            <div>
                <h2>{name}</h2>
                <p>{fullStars + emptyStars}</p>
                <p>{`${model} - ${licensePlate}`}</p>
            </div>
        </div>
    )
}

export default DriverCard