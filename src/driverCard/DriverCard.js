import React from 'react'
import Driver from './Driver'
import {uuid} from 'uuidv4'


const DriverCard = ({drivers}) => {
    return (
        <div className='container'>
           <div className='all-drivers'>
           {drivers.map(driver => <Driver key={uuid()} driver={driver}/>)}
           </div>
        </div>
    )
}

export default DriverCard
