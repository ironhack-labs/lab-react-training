function Random({ min, max }) {

  const result = Math.floor(Math.random() * max) + min;

  return (
    <div className='flex justify-center'>
      <div>
        <p className="relative px-6 py-3 font-bold text-black group">
          <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-red-300 group-hover:translate-x-0 group-hover:translate-y-0"></span>
          <span className="absolute inset-0 w-full h-full border-4 border-black"></span>
          <span className="relative">This is a random value between {min} and {max}: {result}</span>
        </p>
      </div>
    </div>
  );
}

Random.defaultProps = {
  min: '0',
  max: '100'
}

export default Random;