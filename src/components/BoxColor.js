export default function BoxColor({ r, g, b }) {
  return (
    <div
      className="flex flex-col rounded-lg bg-white dark:bg-neutral-700 md:max-w-xl md:flex-row"
      style={{
        border: `1px solid black`,
        width: '500px',
        height: '200px',
        backgroundColor: `rgb(${r}, ${g},${b})`,
      }}
    >
      <p>
        Color : R = {r} , G = {g} , B = {b}
      </p>
    </div>
  );
}
