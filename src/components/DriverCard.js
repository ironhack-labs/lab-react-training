const DriverCard = (props)=>{
    const number = Math.round(props.rating)
return(
    <div className="m-2 p-1 d-flex flex-row justify-content-center align-items-center" style={{background:'#425CBB',borderRadius:'7px'}} >
    <div>
        <img style={{width:100,height:100,borderRadius: '50px'}} src={props.img} alt={props.img}/>
        </div>
        <div className="m-2" style={{color:'white'}}>
            <h3>{props.name}</h3>
            <div className="h3" style={{color: 'white'}} >
               {'★'.repeat(number)}{'☆'.repeat(5-number)}
            </div>
            <div>{props.car.model} - {props.car.licensePlate}</div>
        </div>

    </div>
)
}
export default DriverCard