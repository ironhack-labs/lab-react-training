const Random = ({ min, max }) => {
  let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return (
    <div className="random">
        <p>
            Random value between {min} and {max} → {randomNumber}
        </p>
    </div>
  )
}

export default Random