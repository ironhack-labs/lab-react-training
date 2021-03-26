import '../assets/css/NumbersTable.css'
const NumbersTable = ({limit}) => {

  function limitHandler() {
      let board = []
      for(let i = 1; i<=limit; i++){
          if(i%2 === 0){
              board.push(
                  <div className="box__number red">{i}</div>
              )
          }
          else {
            board.push(
                <div className="box__number">{i}</div>
            )
          }
          if(i%5 ===0 ){
            board.push(<br/>)
          }

      }
      return board
    }

  return (
    <div className="number__container">{limitHandler()}</div>
  )
}

export default NumbersTable
