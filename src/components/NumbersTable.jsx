function NumbersTable({ limit }) {
    const numbers = []
    for (let i = 1; i <= limit; i++) { numbers.push(i) }
    const customWidth = 400
  
    const customStyle = (number) => {
      return {
        width: customWidth / 6,
        height: customWidth / 6,
        border: '1px solid black',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: number % 2 === 0 ? 'red' : 'white',
      }
    }
  
    return (
      <div
        className="NumbersTable"
        style={{
          width: customWidth,
          display: 'flex',
          alignItems: 'center',
          flexWrap: 'wrap',
          justifyContent: 'left',
          padding: 10,
        }}
      >
        {numbers.map((number) => {
          return <div style={customStyle(number)}>{number}</div>;
        })}
      </div>
    )
  }
  
  export default NumbersTable