import React from 'react';
import './NumbersTableClass.css';

class NumbersTableClass extends React.Component {
  constructor(props) {
    super(props);
    this.items = [];
  }

  addItems = () => {
    for (let i = 1; i <= this.props.limit; i++) {
      console.log(i);
      const checkNum =
        i % 2 === 0
          ? this.items.push(
              <div className="par" key={i}>
                {i}
              </div>
            )
          : this.items.push(
              <div className="impar" key={i}>
                {i}
              </div>
            );
    }
    console.log(this.items);
    //return this.items;
  };

  componentWillMount() {
    this.addItems();
  }

  render() {
    return <div className="numberContainer">{this.items}</div>;
  }
}

export default NumbersTableClass;
