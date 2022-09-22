import React from 'react'

const Rating = (props) => {
    const {children} = props
    const Round = Math.round(children)
  return (
    <div className='stars'> 
         {Round === 0 && <p>"------"</p>}
        {Round === 1 && <p>"*-----"</p>}
        {Round === 2 && <p>"**----"</p>}
        {Round === 3 && <p>"***---"</p>}
        {Round === 4 && <p>"****--"</p>}
        {Round === 5 && <p>"*****-"</p>}
        {Round === 6 && <p>"******"</p>}

    </div>
  )
}

export default Rating