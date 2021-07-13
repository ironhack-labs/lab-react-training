import React, { Component } from 'react';

class Even extends Component {
  constructor(props) {
    super(props); //since we are extending class Table so we have to use super in order to override Component class constructor
    this.state = {
      //state is by default an object
      numbers: [
        { id: 1, number: 1 },
        { id: 2, number: 2 },
        { id: 3, number: 3 },
        { id: 4, number: 4 },
        { id: 5, number: 5 },
        { id: 6, number: 6 },
        { id: 7, number: 7 },
        { id: 8, number: 8 },
        { id: 9, number: 9 },
        { id: 10, number: 10 },
        { id: 11, number: 11 },
        { id: 12, number: 12 },
      ],
    };
  }
  renderTableData() {
    return this.state.numbers.map((numbers, index) => {
      const { id, number } = numbers; //destructuring
      return (
        <tr key={id}>
          <td
            style={{
              border: '1px solid black',
              minWidth: '50px',
            }}
          >
            {number}
          </td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div>
        <h1 id="title">Here are the Numbers</h1>
        <table id="students">
          <tbody>{this.renderTableData()}</tbody>
        </table>
      </div>
    );
  }
}
export default Even;
