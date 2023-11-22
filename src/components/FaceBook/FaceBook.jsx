import { useState } from 'react'
import profiles from './../../Data/berlin.json'
import FaceBookCard from './FacebookCard'

const FaceBook = () => {

    const [face, setFace] = useState(profiles)

    // const handleFace = face.map(elm => {
    //     if (elm.country = 'England') {
    //         setFace( )
    //     }
    // })



    return (
        <section className='facebookList'>

            <h1>Berlin</h1>
            <button>all</button>
            <button >England</button>
            <button>Malaysia</button>
            <button>Germany</button>
            {
                face.map((elm, i) => {
                    return (
                        <FaceBookCard key={i} {...elm} />
                    )
                })
            }
        </section>
    )
}

export default FaceBook