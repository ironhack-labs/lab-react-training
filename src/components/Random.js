function Random({ min, max }) {
  const maxNum = max + 1;
  const randonNum = Math.floor(Math.random() * maxNum) + 1;
  return (
    <div>
      <p>
        Random value between 1 and {max}: {randonNum}
      </p>
    </div>
  );
}

export default Random;
