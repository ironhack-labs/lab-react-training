const Random = ({min, max}) => {
    
    const randomVal = Math.floor(Math.random() * (max - min + 1)) + min;

  return (
    <div>
        <p>Random value between {min} and {max} is: {randomVal}</p>
    </div>
  )
}

export default Random