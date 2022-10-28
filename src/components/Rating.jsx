function Rating({ children }) {
  const starFull = '\u2605';
  const starEmpty = '\u2606';

  return (
    <div style={{ display: 'flex' }}>
      <span style={{ fontSize: '24px' }}>
        {starFull.repeat(Math.round(children)).padEnd(5, starEmpty)}
      </span>
    </div>
  );
}
export default Rating;
