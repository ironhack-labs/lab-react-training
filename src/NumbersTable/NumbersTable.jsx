
import "./NumbersTable.css"

const NumbersTable = ({ limit }) => {
//   let numbersArr = Array.from({ length: limit + 1 }, (v, i) => i);
    
    

  return (
    <table>
      <tbody>
        <tr className="row">
          <td className="col">1</td>
          <td className="col">2</td>
          <td className="col">3</td>
          <td className="col">4</td>
          <td className="col">5</td>
        </tr>
        <tr>
          <td className="col">6</td>
          <td className="col">7</td>
          <td className="col">8</td>
          <td className="col">9</td>
          <td className="col">10</td>
        </tr>
        <tr>
          <td className="col">11</td>
          <td className="col">12</td>
        </tr>
      </tbody>
    </table>
  );
};

export default NumbersTable;
