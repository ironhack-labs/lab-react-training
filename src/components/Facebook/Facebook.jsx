import { useState } from 'react';
import profiles from '../../data/berlin.json';
const Facebook = () => {
    return (
        profiles.map(elm => {
            return (
                <>
                    <img src={elm.img} alt="" />
                    <p>{elm.firstName}</p>
                    <p>{elm.lastName}</p>
                    <p>{elm.country}</p>
                </>
            )
        }
        )
    )
}
export default Facebook