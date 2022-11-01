export default function BoxColor(props) {
  return (
    <div
      className="box"
      style={{ backgroundColor: `rgb(${props.r},${props.g},${props.b})` }}
    >
      <p>
        rgb({props.r},{props.g},{props.b})
      </p>
    </div>
  );
}
