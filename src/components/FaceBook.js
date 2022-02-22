import { useState } from 'react'
import allData from '../data/berlin.json'

const FaceBook = () => {

    const filterArr = [...new Set(allData.map(elm => elm.country))]
    const [colorBg, setColorBg] = useState({ backgroundColor: 'white' })

    const changeBg = {
        backgroundColor: '#a3d2e2'
    }

    return (
        <>
            <button onClick={() => setColorBg(changeBg.backgroundColor)}>All</button>
            {filterArr.map(elm => {
                return <button onClick={() => {
                    const div = document.getElementsByClassName(`${elm}`)
                    const newArr = Array.from(div)

                    newArr.map(elm => elm.className = 'blue')

                }} className={elm}>{elm}</button>
            })}
            {
                allData.map((elm, ind) => {
                    return <div style={{ backgroundColor: colorBg }} className={`FaceBook ${elm.country}`} key={ind}>
                        <img src={elm.img} />
                        <div className='sideText'>
                            <p><strong>First name:</strong> {elm.firstName}</p>
                            <p><strong>Last name:</strong> {elm.lastName}</p>
                            <p><strong>Country:</strong> {elm.country}</p>
                            <p><strong>Type:</strong> {elm.isStudent ? 'Student' : 'Teacher'}</p>
                        </div>
                    </div>
                })
            }
        </>
    )
}

export default FaceBook