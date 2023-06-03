function Rating({ children, displayNum }) {
  return (
    <div className="rating">
      {children >= 0 && children <= 5 ? (
        <strong aria-label={'Rating: ' + children + 'stars'}>
          {'★'.repeat(Math.round(children))}
          {'☆'.repeat(5 - Math.round(children))}
          <br />
          {displayNum !== false ? children : null}
        </strong>
      ) : (
        'invalid rating'
      )}
    </div>
  );
}

export default Rating;
