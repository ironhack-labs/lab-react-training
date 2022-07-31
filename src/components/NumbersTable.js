function NumbersTable({ limit }) {
  //starting with zero boxes in the array
  const boxes = [];
  //from 0 to the "limit", for every value:
  for (let i = 0; i < limit; i++) {
    //if value is even
    if (i % 2 === 0) {
      boxes.push(
        //push div with red bg and its value
        <div key={i} className="box" style={{ backgroundColor: 'red' }}>
          <p>{i}</p>
        </div>
      );
    } else {
      //if value is odd
      boxes.push(
        //push div with its value
        <div key={i} className="box">
          <p>{i}</p>
        </div>
      );
    }
  }
  return <figure className="NumbersTable">{boxes}</figure>;
}

export default NumbersTable;
