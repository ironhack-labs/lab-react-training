import './Random.css'

function Random(props) {

    const {min, max} = props

    const randomNum = Math.floor(Math.random() * (max - 1) + min + 1)
  return (
    <div className='random'>
    <p>Random value between {min} and {max} {randomNum}</p>
    </div>
  )
}

export default Random