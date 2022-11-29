export default function Random({ min, max }) {
  const random = Math.random() * (max - min) + min;
  return (
    <h3 className="boxed-border">
      Random value between {min} and {max} {'=>'} {parseInt(random)}
    </h3>
  );
}
