function Random({ min, max }) {
    return (
      <div className={`border border-2 border-dark p-2 my-2 `}>
        <h5 className="m-0">Random value beteen {min} and {max} = {Math.floor(Math.random() * (max - min)) + min}</h5>
      </div>
    )
  }
  export default Random;
