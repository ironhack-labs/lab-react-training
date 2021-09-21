function Rating(props) {
    const rating = Math.round(props.children)
    let stars = "";
    for (let i = 0; i < 5; i++) {
        if (i <= rating) {
            stars += "★"
        } else {
            stars += "☆"
        }
    }
  return (
    <div className="Rating">
      {stars}
    </div>
  );
}

export default Rating;
