import React from 'react';

const App = (props) => {
  const list = Array.from({ length: props.limit }, (_, i) => {
    /*
    const divStyle = {
      backgroundColor: i % 2 ? 'red' : 'white',
    };
    */
    // style={divStyle}
    const cssStyle = i % 2 ? 'boxred' : 'boxwhite';
    return (
      <li key={'li' + i} className={cssStyle}>
        {i + 1}
      </li>
    );
  });
  return <ul className="NumbersTable">{list}</ul>;
};

export default App;
