import './DriverCard.css'

const DriverCard = ({ name, rating, img, car }) => {

    function convertirARating(children) {
        var numero = children
        var rating = '';
        var estrellaLlena = '★';
        var estrellaVacia = '☆';

        var ratingRedondeado = Math.round(numero);

        for (var i = 0; i < ratingRedondeado; i++) {
            rating += estrellaLlena;
        }

        for (var j = ratingRedondeado; j < 5; j++) {
            rating += estrellaVacia;
        }

        return rating
    }
    console.log((rating))
    return (
        <div className="driverCard">
            <div className="driverImg">
                <img src={img} alt="" />
            </div>
            <div className="textDriver">
                <p>{name}</p>
                <p>{convertirARating(rating)}</p>
                <p>{car.model} - {car.licensePlate}</p>
            </div>
        </div>
    )

}

export default DriverCard
