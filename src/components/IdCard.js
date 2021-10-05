import React from 'react'

 function IdCard({lastName, firstName, gender, height, birth, picture }) {
    console.log(typeof birth)
    return (
        <div>
            <h1>firstname:{firstName}</h1>
            <h1>lastName:{lastName}</h1>
            <h1>gender:{gender}</h1>
            <h1>height:{height}</h1>
            <h1>birth:{birth.toString()}</h1>
            <img src={picture} alt={firstName}/>

        </div>
    )
}

// 3. EXPORTACIÓN
export default IdCard