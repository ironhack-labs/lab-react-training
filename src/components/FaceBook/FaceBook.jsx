import { useState } from 'react';
import profiles from '../../data/berlin.json';
import './FaceBook.css'
const FaceBook = ({ firstName, lastName, country, img, isStudent }) => {

    const [bgColor, setBgColor] = useState('white')


    const handlerBg = () => {
        return profiles.filter((elem) => {
            if (elem.country === 'England') {
                return setBgColor('blue')
            }
        })
    }

    return (
        <>
            <h1>FaceBook List</h1>
            <div>
                <button
                    onClick={handlerBg}
                >England</button>
                <button>USA</button>
                <button>Malaysia</button>
                <button>Germany</button>
            </div>

            {
                profiles.map(({ firstName, lastName, country, img, isStudent }, index) => {
                    return (
                        <article key={index} className='FaceBook-Card' style={{ backgroundColor: bgColor }}>
                            <img src={img} alt="" />
                            <h2>{firstName}</h2>
                            <p>{lastName}</p>
                            <h3>{country}</h3>
                            <p>Type: {isStudent ? 'Student' : 'No Student'}</p>
                        </article >
                    )
                })
            }

        </>

    )
}
export default FaceBook