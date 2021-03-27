import React, { useState } from 'react'
import FacebookCard from './FacebookCard'
import berlin from '../../data/berlin.json'
import StudentsFilter from './StudentsFilter'
import './Facebook.scss'

const FacebookContainer = () => {
    const [students, setStudents] = useState([...berlin])

    const onFilter = (country) => {
        setStudents([...berlin].filter((s) => s.country.includes(`${country}`)))
    }

    return (
        <div className="FacebookContainer">
            <StudentsFilter onFilter={onFilter}/>
            {
                students.map((s) => <FacebookCard {...s} key={s.firstName} />)
            }
        </div>
    )
}

export default FacebookContainer
