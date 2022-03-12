function NumbersTable(props) {
  const { limit } = props;
  const list = [];
  const listStyle = {
    listStyle: 'none',
    display: 'flex',
    width: '500px',
    flexWrap: 'wrap',
    padding: '0',
  };
  const listItemStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexBasis: '99px',
    height: '99px',
    border: 'solid 1px black',
  };

  for (let i = 0; i < limit; i++) {
    const li =
      i % 2 === 0 ? (
        <li style={{ ...listItemStyle }} key={i}>
          {i + 1}
        </li>
      ) : (
        <li style={{ ...listItemStyle, backgroundColor: 'red' }} key={i}>
          {i + 1}
        </li>
      );

    list.push(li);
  }
  return (
    <ul style={listStyle} className="">
      {list}
    </ul>
  );
}

export default NumbersTable;
