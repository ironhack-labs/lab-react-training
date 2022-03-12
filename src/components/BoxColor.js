//jshint esversion:8

export const BoxColor = ({ r, g, b }) => {

  return (
    <div style={{ backgroundColor: `rgb(${r}, ${g}, ${b})`, width: "200px",  height: "80px"}}>
        rgb({r}, {g}, {b})

    </div>
  );
};
