function Rating(props) {
    const outOf = 5;
    const rating = Math.round(props.children);
    return (
        <div className="rating">
            <p>{'★'.repeat(rating)}{'☆'.repeat((outOf-rating))}</p>
        </div>
    )
  }
   
  export default Rating;