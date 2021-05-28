import React from 'react';

export const NumbersTable = (props) => {
  let prueba = [...Array(props.limit).keys()];
  console.log(prueba);

  return (
    <div className=" mt-5">
      <div className="prueba">
        {prueba.map((e, i) =>
          i % 2 === 0 ? (
            <div>
              <h3 className="App">{i + 1}</h3>
            </div>
          ) : (
            <div style={{ backgroundColor: 'red' }}>
              <h3 className="App">{i + 1}</h3>
            </div>
          )
        )}
      </div>
    </div>
  );
};