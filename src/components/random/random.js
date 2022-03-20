function Random(min, max) {
  return (
    <div>
      {`Random value between ${min} and ${max} =>`}
      {Math.floor(Math.random() * (max - min +1) + min)}
    </div>
  );
}

export default Random;
