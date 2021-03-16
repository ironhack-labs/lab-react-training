import React from 'react';

const NumbersTable = (props) => {
  let arr = [];
  for (let i = 1; i <= props.limit; i++) {
    arr.push(i);
  }
  let styleBoxes = {
    border: '1px solid black',
    width: 200,
    height: 100,
  };
  let styleBoxesEven = {
    border: '1px solid black',
    backgroundColor: "red",
    width: 200,
    height: 100,
  };
  let wrapper = {
    display: 'flex',
    flexWrap: 'wrap',
  };
  return (
    <div  style={wrapper}>
      {arr.map((element, index) => {
          if(index%2===0){return < div key={index} style={styleBoxes}>{element}</div>}
         else {return <div  key={index} style={styleBoxesEven}>{element}</div>};
      })}
    </div>
  );
};

export default NumbersTable;
