


function Random({ min, max }) {
  const displayedRandomNumber = Math.floor(Math.random() )
  return (
    <div>
      <h3>{`Random value between ${min} and ${max} => ${displayedRandomNumber}`}</h3>
    </div>
  )
}

export default Random
