function Rating({children}) {
    const stars = (children < 0) ? 0 : (children > 5) ? 5 : Math.round(children);
    const outOf = 5 - stars;

    return (
      <div className="Rating">
        <h1>
          {'★'.repeat(stars)}
          {'☆'.repeat(outOf)}
        </h1>
      </div>
    );
}

export default Rating;