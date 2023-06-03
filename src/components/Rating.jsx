function Rating({ children }) {
  return (
    <article className="rating">
      {children >= 0 && children <= 5 ? (
        <strong>
          {'★'.repeat(Math.round(children))}
          {'☆'.repeat(5 - Math.round(children))}
          <br />
          {children}
        </strong>
      ) : (
        'invalid rating'
      )}
    </article>
  );
}

export default Rating;
