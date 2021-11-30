
import './DriverCard.css'

const DriverCard = (props) => {

    const { name, rating, img, car, } = props

    const printRating = () =>{
        let ratingArr = []

        for(let i = 0; i < Math.round(rating); i++){            //Supongo que habría manera de utilizar la misma funcion que antes sin copiarla de nuevo 🤔 la queria mete en el app pero como necesito los valores que le mando como props no se me ocurria!
        ratingArr.push('★')
        }
        while(ratingArr.length < 5){
        ratingArr.push('☆')
        }
        return ratingArr
    }

    return(
        <div className="flex-driver-card">
            <div>
                <img src={img} alt="Driver Card" />
            </div>
            <div>
                <h2>{name}</h2>
                <p>{printRating()}</p>
                <p>{car.model} - {car.licensePlate}</p>
            </div>
        </div>
    )
}


export default DriverCard