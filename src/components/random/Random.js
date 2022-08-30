function Random({ min, max}) {
  const randomNumber = Math.floor(Math.random() * (max - min) + min)
  return(
    <div className="d-flex border border-dark my-2 ps-1">
      <h6 className='my-1'>{`Random value between ${min} and ${max} => ${randomNumber}`}</h6>
    </div>
  )
}

export default Random;