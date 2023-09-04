export default function Random({ min, max }) {
  const random = Math.floor(Math.random() * (max - min) + min);

  return (
    <div className="Random">
      <p>
        Random value between {min.toString()} and {max.toString()} {'=> '}
        {random.toString()}
      </p>
    </div>
  );
}
