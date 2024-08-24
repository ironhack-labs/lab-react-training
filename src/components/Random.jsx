function Random({ min, max }) {
  const randomNumber = min + Math.floor(Math.random() * (max - min + 1));

  return (
    <div>
      <p>
        Random value between {min} & {max} =&gt; {randomNumber}
      </p>
    </div>
  );
}

export default Random;
