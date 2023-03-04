import Rating from "./Rating";

function DriverCard({ name, rating, img, car }){
    return (
        <div className='piloto'>
            <div className='piloto-image'>
                <img src={img} alt='Perfil Piloto'/>
            </div>
            <div className='infos-piloto'>
                <p className="nome-piloto">{name}</p>
                <Rating>{rating}</Rating>
                <p className='nome-carro'>{car.model} - {car.licensePlate}</p>
            </div>
        </div>
    )
}

export default DriverCard;