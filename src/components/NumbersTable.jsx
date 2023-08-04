const NumbersTable = ({limit}) => {

    const generateRows= (number) => {
        const rows = [];
        for (let i = 1; i <= number; i++) {
          rows.push(
            <tr key={i}>
              <td>{i}</td>
            </tr>
          );
        }
        return rows;

      };
    return(
      
        <table>
      
      <tbody className="table-body">{generateRows(limit)}</tbody>
    </table>

        
    )
}

export default NumbersTable;