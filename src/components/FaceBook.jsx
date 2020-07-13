import React, { useState } from 'react'
import profiles from '../data/berlin.json'
import FBcard from './FBcard'
import FBbtn from './FBbtn'


export default function Facebook (props) {
    const initialState = {
            profiles: [...profiles]
        }
    
    const [state, setState] = useState(initialState)
    
    const getAllData = () => {
        return state.profiles.map(el => 
            <FBcard 
                key={el.firstName} profile={el}
            />)
    }
    const filterByCountry = (country) => {
        console.log('filterring')
        const filteredProfiles = [...state.profiles]
        filteredProfiles.map(prof => (
                prof.country === country ? prof.isFiltered === true : false
            ),
            setState( state => ({
                profiles: filteredProfiles})))
   
    }



    const getAllBtns = () => {
        return state.profiles.map(el => el.country)
            .filter((country, idx, arr) => arr.indexOf(country) === idx)
            .map(country =>
                <FBbtn 
                    filterProfiles={filterByCountry}
                    country={country}
                />
         
                // <button 
                //     onClick={props.filterProfiles}>{props.country}
                // </button>
            )
    }

        return (
            <div>
                {getAllBtns()}
                {getAllData()}
            </div>
        )
    
}