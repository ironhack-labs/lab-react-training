import profiles from '../../data/berlin.json'

import { useState } from 'react'

const Facebbok = ({ }) => {

    const [profile, setProfile] = useState(profiles)

    const selectCountry = () => {

        const AllCountries = profiles.filter((elm) => {
            return elm.country === 'USA'
        })

        // console.log(AllCountries)

        setProfile(AllCountries)
    }

    return (
        <>
            <h1>Listado de Perfiles </h1>

            <button onClick={selectCountry}> USA</button>
            {/* {profile ? 'special' : 'oridnary'} */}

            {

                profiles.map((elm, i) => {
                    return (
                        <>
                            <div key={i}>

                                <img src={elm.img} style={{ width: '100px' }} />
                                <p>{elm.firstName}</p>
                                <p>{elm.lastName}</p>
                                <p >{elm.country}</p>


                            </div>
                        </>
                    )
                })
            }
        </>
    )




}


export default Facebbok