function Random({ min, max }) {
  const result = Math.floor(Math.random() * (max - min) + min);
  return (
    <article>
      Random Value between {min} and {max} {'=>'} {result}
    </article>
  );
}

export default Random;
