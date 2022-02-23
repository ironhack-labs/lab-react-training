
// Iteration 3 | Component: Random
function Random(props) {
    const {min, max} = props
    const random = Math.floor((Math.random()*(max-min) + min));
  return (
    <div className='random'>
        <p>Random value between {min} and {max} is {random} </p>
    </div>
  );
}

export default Random;
