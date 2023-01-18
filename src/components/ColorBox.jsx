export default function ColorBox({ currentColor }) {
  return (
    <div
      className="boxs"
      style={{
        width: '30px',
        height: '30px',
        border: '1px solid black',
        marginLeft: '8px',
        backgroundColor: currentColor,
      }}
    ></div>
  );
}
