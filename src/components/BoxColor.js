const BoxColor = ({ r, g, b }) => {
  const styles = {
    backgroundColor: `rgb(${r}, ${g}, ${b})`,
    marginBottom: '10px',
    border: '2px solid black',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  };

  return (
    <div style={styles}>
      <p>
        rgb({r},{g},{b})
        <br />#{r.toString(16) + g.toString(16) + b.toString(16)}
      </p>
    </div>
  );
};

export default BoxColor;
