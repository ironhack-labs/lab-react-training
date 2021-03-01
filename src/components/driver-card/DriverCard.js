
function DriverCard({ name, rating, img, car }) {
    const blackStars = Math.round(Number(rating));
    const cleanStars = 5 - blackStars
    const stars = ('★'.repeat(blackStars)) + ('☆'.repeat(cleanStars))
    return (
        <div className={`container-xxl mb-3`}>
            <div className={`d-flex justify-content-center p-3 rounded-3 `} style={{ backgroundColor: '#446FCC' }}>
                <div class="row">
                    <div class="col-md-4">
                        <div className="rounded-circle" style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', width: '130px', height: '130px' }}></div>
                    </div>
                    <div class="col-md-8 text-white">
                        <h2>{name}</h2>
                        <h2>{stars}</h2>
                        <h5>{car.model} - {car.licensePlate}</h5>
                    </div>
                </div>
            </div>
        </div >
    );
}
export default DriverCard;