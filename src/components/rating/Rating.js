

function Rating({ className, children }) {

// let stars = ''

// if (children < 0.5) { stars = '☆☆☆☆☆'} 
// else if (children >=0 && children < 1.5) {stars = '★☆☆☆☆'}
// else if (children >=1.5 && children < 2.5) {stars = '★★☆☆☆'}
// else if (children >=2.5 && children < 3.5) {stars = '★★★☆☆'}
// else if (children >=3.5 && children < 4.5) {stars = '★★★★☆'}
// else {stars = '★★★★★'}


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
