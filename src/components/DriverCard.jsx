function DriverCard (props) {
    const imgstyle = {borderRadius: "50%"}
    const divstyle = {display: "flex", justifyContent: "space-evenly", backgroundColor: "blue"}
    return (
        <div style={divstyle}>
            <div >
                <img src= {props.img} height={100} width = {100} style={imgstyle} alt="" />
            </div>
                <p>{props.name}</p>
                <p>{props.car.model}</p>

            <div>

            </div>
        </div>
    )
}

export default DriverCard;