function Rating({ className, children }) {
const blackStars = Math.round(Number(children));
const cleanStars = 5 - blackStars
const stars = ('★'.repeat(blackStars))+('☆'.repeat(cleanStars))
    return (
      <div className={`p-2 ${className}`}>
        <h1 className="m-0"> {stars} </h1>
      </div>
    )
  }
  export default Rating;
