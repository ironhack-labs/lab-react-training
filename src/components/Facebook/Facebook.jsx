import { useState } from 'react';
import profiles from '../../data/berlin.json';
import './Facebook.css'
import FacebookCard from '../FacebookCard/FacebookCard';

const Facebook = () => {

    const [selected, setSelected] = useState(undefined)

    const countries = ['all', ...new Set(profiles.map((profile) => {
        return profile.country
    }))]
    console.log(countries);

    return (
        <div>
            {
                countries.map((country) => {

                    return <button className={selected === country || selected === 'all' ? 'cardSelected' : ''} onClick={() => setSelected(country)}>{country}</button>
                })
            }
            {
                profiles.map((elm) => {
                    return (
                        <FacebookCard selected={selected === elm.country || selected === 'all'} {...elm}></FacebookCard>
                    )
                })
            }

        </div>

    )
}
export default Facebook