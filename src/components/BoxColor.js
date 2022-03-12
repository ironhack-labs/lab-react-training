export const BoxColor = ({ r, g, b }) => {
  return (
    <div
      style={{
        backgroundColor: `rgb(${r}, ${g}, ${b})`,
        height: '200px',
        width: '40%',
        border: '2px solid black',
      }}
    >
      <p>
        rgb({r}, {g}, {b})
      </p>
    </div>
  );
};
