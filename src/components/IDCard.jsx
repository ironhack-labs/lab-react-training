import React from 'react'

function IDCard(props) {
    const { lastName, firstName, gender, height, birth, picture} = props;

  return (
    <div className='container'>
        <div>
            <img src={picture} alt="user picture" />
        </div>
        <div>
            <p><span className='bold-text'>First Name: </span>{lastName}</p>
            <p><span className='bold-text'>Last Name: </span> {firstName}</p>
            <p><span className='bold-text'>Gender: </span>{gender}</p>
            <p><span className='bold-text'>Height: </span>{height}cm</p>
            <p><span className='bold-text'>Birth: </span>{birth.toLocaleString()}</p> 
        </div>
    </div>
  )
}

export default IDCard