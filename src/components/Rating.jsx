function Rating({ children, displayNum }) {
  return (
    <p className="rating">
      {children >= 0 && children <= 5 ? (
        <strong aria-label={'Rating: ' + children + 'stars'}>
          {'★'.repeat(Math.round(children))}
          {'☆'.repeat(5 - Math.round(children))}
          {displayNum !== false ? (
            <span>
              <br />
              {children}
            </span>
          ) : null}
        </strong>
      ) : (
        'invalid rating'
      )}
    </p>
  );
}

export default Rating;
