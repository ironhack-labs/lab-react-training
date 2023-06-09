function NumbersTable({ limit }) {
  let count = [];
  for (let i = 1; i <= limit; i++) {
    count.push(i);
  }

  console.log(count);

  return (
    <div>
      <table>
        {count.map((number) => {
          return (
            <tr>
              {number % 2 === 0 ? (
                <td style={{ backgroundColor: 'red' }}>{number}</td>
              ) : (
                <td>{number}</td>
              )}
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default NumbersTable;
