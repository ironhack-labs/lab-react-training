import react from 'react'

const Random = ({max, min}) => {
    return (
      <div>
        <p>Random value between {min} and {max} is {Math.floor(Math.random()* max) + min } </p>
      </div>
    )
  }
  
  export default Random