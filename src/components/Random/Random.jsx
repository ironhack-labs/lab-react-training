import './Random.css'

function Random({ min, max }) {

  let numRandom = Math.floor((Math.random() * (max - min + 1)) + min);

  return (
    <div className='container-box-random'>
      <h2 className='p-2'> {`Random value between ${min} and ${max} => ${numRandom} `}</h2>
    </div>
  )
}

export default Random