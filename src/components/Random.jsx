function Random({ min, max }) {
  let randomInt = Math.floor(Math.random() * (max - min + 1) + min);
  return (
    <div>
      Random value between {min} and {max} &#8658; {randomInt}
    </div>
  );
}

export default Random;
