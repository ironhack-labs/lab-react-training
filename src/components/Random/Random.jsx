import './Random.css'

function Random({min, max}) {

    const randomNumber = Math.floor(Math.random() * max + min)

  return (
    <div className='RandomBox'>
        Random value between {min} and {max} => {randomNumber}
    </div>
  )
}

export default Random