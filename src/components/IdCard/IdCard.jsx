import React from 'react'

const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {

    return (
        <section className='idcard'>
            <img src={picture} alt="" />
            <div>
                <p>Lastname : {lastName}</p>
                <p>FirstName:{firstName} </p>
                <p>FirstName:{gender} </p>
                <p>Height:{height} </p>
                <p>Birth:{birth.toDateString()}</p>
            </div>
        </section>
    )
}

export default IdCard