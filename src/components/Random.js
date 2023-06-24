export default function Random({ min, max }) {
  function randomInt(min, max) {
    const a = Math.ceil(min);
    const b = Math.floor(max);
    return Math.floor(Math.random() * (b - a + 1)) + a;
  }

  return <div>{randomInt(min, max)}</div>;
}
