function NumbersTable({ limit }) {
  console.log('Limit: ', limit);
  const numArr = [];

  for (let count = 1; count <= limit; count++) {
    numArr.push(count);
    console.log('Arr: ', numArr);
  }

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        maxWidth: '1020px',
      }}
    >
      {numArr.map((num) => {
        console.log('Num: ', num);
        return (
          <div
            style={{
              width: '200px',
              height: '200px',
              border: 'black 2px solid',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: '36px',
              backgroundColor: num % 2 ? '' : 'red',
            }}
          >
            {num}
          </div>
        );
      })}
    </div>
  );
}

export default NumbersTable;
