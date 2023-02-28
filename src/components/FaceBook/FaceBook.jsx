import './FaceBook.css'
import profiles from './../../data/berlin.json'
import { useState } from 'react'

const FaceBook = () => {

    const [classNameNew, setClassNameNew] = useState('')

    const selector = e => {
        const selectorValue = e.target.value
        const copyArray = [...profiles]
        const newclass = 'Blue'

        copyArray.map(elm => {
            if (selectorValue === elm.country) {
                setClassNameNew(newclass)
            } else setClassNameNew('')
        })
    }

    const finalClass = `ProfileCard ${classNameNew}`


    return (
        <>
            <button className='Button' value="All" onClick={selector}>All</button>
            <button className='Button' value="England" onClick={selector}>England</button>
            <button className='Button' value="USA" onClick={selector}>USA</button>
            <button className='Button' value="Malaysia" onClick={selector}>Malaysia</button>
            <button className='Button' value="Germany" onClick={selector}>Germany</button>
            {
                profiles.map(({ firstName, lastName, country, img, isStudent }, idx) => {
                    return (
                        <div key={idx} className={finalClass}>
                            <img src={img} alt={firstName} />
                            <div>
                                <p><strong>First name:</strong> {firstName}</p>
                                <p><strong>Last name:</strong> {lastName}</p>
                                <p><strong>Country:</strong> {country}</p>
                                <p><strong>Type:</strong> {isStudent ? 'Student' : 'Teacher'}</p>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default FaceBook