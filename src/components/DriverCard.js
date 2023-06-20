import Rating from "./Rating"

function DriverCard(props){
    return (
        <div>
            <div>
                <img src={props.img} />
            </div>
            <div>
                <h2>{props.name}</h2>
                <p>{props.rating}</p>
                {props.car.map(element =>{
                    <p>{element.model} - {element.licensePlate}</p>
                })}
            </div>
        </div>
    )

    

}
export default DriverCard