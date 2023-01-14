import './DriverCard.css'

function DriverCard(props){
    const {driversArray} = props
    return(
        <div className='flex'>
        {driversArray.map(driver=>{
           return <div className='driver-card'>
           <img className="small" src={driver.img}></img>
           <div className='margin-left'>
            <h1>{driver.name}</h1>
            {driver.rating < 4.5 && <h2>★★★★✩</h2>}
            {driver.rating > 4.5 && <h2>★★★★★</h2>}
            <h3>{driver.car.model} - {driver.car.licensePlate}</h3>

            </div>
            </div>
        })
        }
        </div>
    )
}

export default DriverCard