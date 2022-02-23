import './Random.css'

const Random = (props) => {

    const { min, max } = props

    const getRandom = Math.floor(Math.random() * (max - min +1 )) + min
        
    return (

        <article className='Random'>
          
          <p>Random value between {min} & {max} = {getRandom}</p>

        </article>
    )}


export default Random