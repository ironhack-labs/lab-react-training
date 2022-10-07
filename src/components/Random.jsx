function Random(props) {
  let maxNum = props.max;
  let minNum = props.min;
  console.log({maxNum,minNum})
  let randomNum = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum)
  return(
    <div className="random">
      <span>Random number between {minNum} and {maxNum} - {randomNum}</span>
    </div>
  )
}

export default Random