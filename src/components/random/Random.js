function Random({min, max}) {
  const randomNumber = Math.round(Math.random() * (max - min) + min);

  return (
    <nav className="border border-dark mb-2">
      <h3>
        Random value between {min} and {max} =&gt; {randomNumber}
      </h3>
    </nav>
  );
}

export default Random;
