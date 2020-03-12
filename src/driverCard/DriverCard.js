import React from 'react'
import Driver from './Driver'
// import {uuid} from 'uuidv4'


const DriverCard = ({drivers}) => {
    return (
        <div className='container'>
            <h2>Iteration 7: Component: DriverCard</h2>
            <hr/>
           <div className='all-drivers'>
           {drivers.map((driver,i) => <Driver key={i+1} driver={driver}/>)}
           </div>
        </div>
    )
}

export default DriverCard
