import './Random.css'

function Random({min,max}){

const randomNumber = (Math.floor(Math.random() * (max - min)) + min);


  return(
    <div className='row border border-dark m-5 d-flex justify-content-start align-items-center'>
    <p className='m-1'>Random value between {min} and {max} => {randomNumber}</p>
  </div>
  )
}

export default Random