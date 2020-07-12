import React from 'react'
import profiles from '../data/berlin.json';
import FBcard from './FBcard'


export default function FaceBook() {
    const getAllData = () => {
   
        return (
            profiles.map(el => <FBcard key={el.LastName} profile={el}/>)
        )
    }
    return (
        <div>
            {getAllData()}
        </div>
    )

}