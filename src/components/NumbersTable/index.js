import React from "react";
import "./style.css";

const NumbersTable = (props) => {
  const { limit } = props;
  let n = [];

  // https://flaviocopes.com/react-how-to-loop/
  for(let pos = 0; pos <= limit; pos++){
    n.push(pos);
  }

  const multiple = (n) => { return n % 2;};

  return (
      <div className="flex">
          {n.map((n,index) => {
            return (
              <div key={index} className="boxNumbers" style={{backgroundColor: multiple(n) ? "white" : "red"} }>
                {n}
              </div>
            )
          })}
      </div>
  );
};

export default NumbersTable;