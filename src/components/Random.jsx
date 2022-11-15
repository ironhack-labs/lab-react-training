function Random({ min, max }) {
  const randomNum = Math.floor(Math.random(min) * max);
  return (
    <div>
      <p>
        Random value between {min} and {max} {'=>'} {randomNum}
      </p>
    </div>
  );
}

export default Random;