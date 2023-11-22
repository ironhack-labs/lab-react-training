import profiles from '../../data/berlin.json';
import { useState } from 'react';

const newArr = []
const FaceBook = () => {

    const [profile, setProfile] = useState(profiles)

    profiles.map(e => {
        return newArr.push(e.country)

    })
    console.log(newArr)
    return (
        <>
            {

                profiles.map((e, i) => {
                    return (
                        <>
                            <button key={i}> {e.country}</button>
                            <div key={i} >
                                <img src={e.img} alt="" />
                                <p>Nombre :{e.firstName}</p>
                                <p>Apellido:{e.lastName}</p>
                                <p>País:{e.country}</p>
                                <p>{e.isStudent ? 'student' : 'Teacher'}</p>
                            </div>
                        </>
                    )
                })
            }
        </>
    )
}

export default FaceBook