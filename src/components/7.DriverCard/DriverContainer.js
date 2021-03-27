import React from 'react'
import DriverdCard from './DriverdCard'
import { driverInfo } from '../../data/drivers'
import './Driver.scss'

const DriverContainer = () => {
    return (
        <div className="DriverContainer">
            {driverInfo.map((driver) => {
                return <DriverdCard {...driver} key={driver.car.licensePlate}/>
            })}
        </div>
    )
}

export default DriverContainer
