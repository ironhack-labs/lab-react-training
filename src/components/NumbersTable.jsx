
function NumbersTable(props) {
    const {limit} = props;
    const limitArr = [];
    for(let i = 1; i <= limit; i++){
        limitArr.push(i);
    }

  return (
    <div>
        {limitArr.map(i => {
            if(i % 2) return <span>{i}</span>
            else return <span style={{backgroundColor: "tomato"}}>{i}</span>
        })}
    </div>
  )
}

export default NumbersTable