

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

const Random = (props) => {
    const result = getRandomInt(props.min,props.max)
return <div className="div-random">Random value between {props.min} and {props.max} = {result}</div>

}

export default Random