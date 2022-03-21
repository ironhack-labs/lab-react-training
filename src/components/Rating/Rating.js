import React from 'react'
import './Rating.css'

const Rating = ({children}) => {
  return (
    <div className="d-flex mt-2">
      {[1,2,3,4,5].map( (star, index) => {
          return (
            <div key={index} 
                className={`start m-1 ${Math.round(children) > index ? 'bg-Star': '' }`} >
            </div>
          )
        })
      }
    </div>
  )
}

export default Rating