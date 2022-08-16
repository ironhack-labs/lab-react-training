
function Random(props) {
    const {min, max} = props;

    const randomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
    
  return (
    <div>
    <p>Random value between {min} and {max} => {randomNumber(min, max)}</p>
    </div>
  )
}

export default Random