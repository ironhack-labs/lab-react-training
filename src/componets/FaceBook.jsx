import profiles from '../data/berlin.json';
import FaceBookCards from './facebookCards';
import { useState } from 'react'

const FaceBook = () => {
    const [allProfiels, setMoviesList] = useState(profiles)
    const [color, setColor] = useState(false)

    return (
        <>
            {allProfiels.map(elm => <button>{elm.country}</button>)}
            {allProfiels.map(elm => <FaceBookCards {...elm} key={elm._id} />)}
        </>
    )
}
export default FaceBook