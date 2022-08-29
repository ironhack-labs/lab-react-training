import './Random.css'

function Random({min, max}) {

  function between(min, max){
    return Math.floor(
      Math.random() * (max - min) + min
    )
  }

  return (
    <div className="id-card-box d-flex border border-dark  my-2">{/**/}
      <p className='m-2'>Random value between <strong>{min}</strong>  and <strong>{max}</strong> = <strong>{between(min, max)}</strong></p>
    </div>
  )
}

export default Random;