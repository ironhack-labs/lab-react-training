function Rating({ children }) {
  const star = Math.round(children);

  return (
    <div>
      <i className={`fa fa-star${star < 1 ? '-o' : ''} fa-lg`} />
      <i className={`fa fa-star${star < 2 ? '-o' : ''} fa-lg`} />
      <i className={`fa fa-star${star < 3 ? '-o' : ''} fa-lg`} />
      <i className={`fa fa-star${star < 4 ? '-o' : ''} fa-lg`} />
      <i className={`fa fa-star${star < 5 ? '-o' : ''} fa-lg`} />
    </div>
  );
}

export default Rating;
