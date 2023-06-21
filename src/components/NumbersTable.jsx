export default function NumbersTable(props) {
  const { limit } = props;

  return (
    <div className="numbers-box">
      {[...Array(limit).keys()].map((index) => (
        <div
          style={{ backgroundColor: !((index + 1) % 2) ? 'red' : '' }}
          className="number-box"
          key={index + 1}
        >
          {index + 1}
        </div>
      ))}
    </div>
  );
}
