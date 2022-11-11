function Box({ number }) {
  return (
    <div
      style={{
        backgroundColor: number % 2 === 0 ? 'red' : 'white',
      }}
    >
      {number}
    </div>
  );
}

function ListAndKeys({ limit }) {
  return (
    <div>
      {[...Array(limit)].map((v, index) => {
        return <Box number={index + 1} key={index} />;
      })}
    </div>
  );
}

export default ListAndKeys;
