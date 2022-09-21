import Rating from "./Rating"

function DriverCard(props){
  const {name, rating, img, car} = props
  const {model, licensePlate} = car
    return (
    <div className="target">
    <div className="container-img">
        <img src={img} width="100px" height="100px"></img>
    </div>
    <div className="content">
    <h1 className="title">{name}</h1>
    <span className="rating"><Rating>{rating}</Rating></span>
        <div className="info">
            <span>{model}</span>
            <span> - </span>
            <span>{licensePlate}</span>
        </div>
    </div>
     
    </div>
  )
}

export default DriverCard