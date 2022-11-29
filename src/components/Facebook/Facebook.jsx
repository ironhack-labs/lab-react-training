import './Facebook.css'
import profiles from './../../data/berlin.json';
import IdCard from '../IdCard/IdCard';
import { useState } from 'react';


const Facebook = () => {

    const [className, setClasname] = useState()

    const changeColor = () => {
        
    }

    return (
        <>
        {profiles.map((elem, idx) => {
                return <button onClick={changeColor} key={idx}> {elem.country}</button>
            }
        )}

        {profiles.map((elem, idx) => {
                return <IdCard key={idx} {...elem} />
            }
        )}
        </>
    )
        
}

export default Facebook