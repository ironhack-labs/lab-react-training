function NumbersTable({ limit }) {
   
    const boxes = [];
    
    for (let i = 0; i < limit + 1; i++) {
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