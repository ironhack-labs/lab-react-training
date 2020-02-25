import React  from 'react'
import FacebookCard from './FacebookCard'
import ironData  from './../data/berlin.json'
const Facebook = ()=>{
    return(
        ironData.map( (ironHacker, index)=>{
            return <FacebookCard
                key ={"ironhacker-"+index}
                name={ironHacker.firstName}
                lastName = {ironHacker.lastName}
                type={ironHacker.isStudent}
                country={ironHacker.country}
                img={ironHacker.img}

            />
        })
       /*  <div>
            <FacebookCard 
            name="Erika"
            lastName="Flores"
            country="Mexico"
            type="Student"/>
        </div> */
    )
}
export default Facebook