
function Random({ min, max }) {
  
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  return (
    <div className=" border mx-5 px-2 my-3" style={{width:"700px", height:"50px", fontSize:"2rem"}}>
      <p>Random value between {min} and {max}: {randomNumber}</p>
    </div>
  );
}

export default Random;
      