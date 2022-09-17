function Rating({ children }) {
  function displayStar() {
    let star = '';
    const starNum = Math.round(children);
    console.log(starNum);
    for (let i = 0; i < 5; i++) {
      i < starNum ? (star += '🖤') : (star += '🤍');
    }
    return star;
  }

  return (
    <div
      style={{
        fontSize: '2rem',
        display: 'flex',
        justifyContent: 'left',
        marginLeft: '2rem',
      }}
    >
      {displayStar()}
    </div>
  );
}

export default Rating;
