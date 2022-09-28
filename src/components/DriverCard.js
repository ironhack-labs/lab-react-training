const DriverCard = (props) => {
    return (
        <section className="driverCard">
            <img className="driverImg" src={props.img} alt='Driver'/>
            <div className="driverInfo">
                <div>{props.name}</div>
                <div>
                    {Math.round(props.rating) === 0 ? <div>&#9734;&#9734;&#9734;&#9734;&#9734;</div>: 
                     Math.round(props.rating) === 1 ? <div>&#9733;&#9734;&#9734;&#9734;&#9734;</div> :
                     Math.round(props.rating) === 2 ? <div>&#9733;&#9733;&#9734;&#9734;&#9734;</div> :
                     Math.round(props.rating) === 3 ? <div>&#9733;&#9733;&#9733;&#9734;&#9734;</div> :
                     Math.round(props.rating) === 4 ? <div>&#9733;&#9733;&#9733;&#9733;&#9734;</div> :
                     Math.round(props.rating) === 5 ? <div>&#9733;&#9733;&#9733;&#9733;&#9733;</div> :
                     'Something went wrong'}
                </div>
                <div>{props.car.model} - {props.car.licensePlate}</div>
            </div>
        </section>
    )
}

export default DriverCard