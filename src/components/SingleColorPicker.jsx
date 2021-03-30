    import React from 'react'
    import '../assets/css/SingleColorPicker.css';
    const SingleColorPicker =  ({originalColor, onChange}) => {
    return(
        <div className='SingleColorPicker d-flex ' >
            <div className='ColorRectangle mx-2 my-2' style={{backgroundColor: originalColor}}></div>
            <input type="Number" className='mx-2 my-2' name={originalColor} placeholder='0' onChange={onChange} />
        </div>
    )
  }

  export default SingleColorPicker