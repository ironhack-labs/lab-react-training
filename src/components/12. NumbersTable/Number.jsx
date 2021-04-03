const Number = ({ i }) => {
  const colors = (i) => {
    if (i % 2 === 0) {
      return 'red';
    } else {
      return 'white';
    }
  };
  return <div className="singletable" style={{ backgroundColor: colors(i)  }}>{i}</div>;
};

export default Number;
