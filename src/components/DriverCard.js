import Rating from './Rating';

function DriverCard(props){
    const {name, rating, img, car} = props
    const {model, licensePlate} = car;

      return(
        <div class="driverCard d-flex">
        <div class=""><img src={img}></img></div>
          <div class="content">
            <h1>{name}</h1>
            <div class="puntaje"><Rating >{rating}</Rating></div>
            <div class="d-flex">
                <p>{model} </p>
                <p> - </p>
                <p> {licensePlate}</p>
            </div>
            </div>   
        </div>
      )
}

export default DriverCard