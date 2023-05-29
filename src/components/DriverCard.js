import { Rating } from "./Rating";

export function DriverCard({name, rating, img, car}){
    return(
        <div className="rounded-3 d-flex justify-content-center align-items-center p-3" style={{backgroundColor: "#425cbb"}}>
         <div className="d-flex gap-3">
            <img className="profile-picture" style={{borderRadius: '50%'}} src={img} alt="" />
            <div className="text-white text-start">
                <h4 className="fw-bold">{name}</h4>
                <Rating>{rating}</Rating>
                <p>{car.model} - {car.licensePlate}</p>
            </div>
         </div>
        </div>
    );
}