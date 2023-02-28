import FacebookCard from '../FacebookCard/FacebookCard'
import profiles from '../../data/berlin.json'
import { useState } from 'react'

const Facebook = () => {
    let England, Usa, Malaysia, Germany

    const [selected, setSelected] = useState(undefined)

    const selectEngland = () => {
        setSelected('England')
    }
    const selectUSA = () => {
        setSelected('USA')
    }
    const selectMalaysia = () => {
        setSelected('Malaysia')
    }
    const selectGermany = () => {
        setSelected('Germany')
    }

    return (
        <>
            <div className='Facebook'>
                <button onClick={() => setSelected('')}>All</button>
                <button onClick={selectEngland}>England</button>
                <button onClick={selectUSA}>USA</button>
                <button onClick={selectMalaysia}>Malaysia</button>
                <button onClick={selectGermany}>Germany</button>

            </div>
            {
                profiles.map((elm, i) => {
                    return <FacebookCard key={i} {...elm} selected={selected} />
                })
            }
        </>
    )
}

export default Facebook