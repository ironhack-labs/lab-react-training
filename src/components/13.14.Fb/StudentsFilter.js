import React from 'react'
import './Facebook.scss'

const StudentsFilter = ({onFilter}) => {
    const countries = [ 'England', 'USA', 'Malaysia', 'Germany', 'Scotland', 'Kazakhstan', 'Russia', 'Brazil', 'Catalonia', 'France', 'Israel', 'Sweden', 'Taiwan', 'Norway', 'Turkey']
    return (
        <div className="StudentsFilter">
            {
                countries.map((country) => {
                    return <button onClick={() => onFilter(country)} key={country}>{country}</button>
                })
            }
        </div>
    )
}

export default StudentsFilter
