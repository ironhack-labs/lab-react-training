//jshint esversion:8


  



export const BoxColor = ({ r, g, b }) => {

    const rgbToHex = (r, g, b) => '#' + [r, g, b].map(x => {
        const hex = x.toString(16)
        return hex.length === 1 ? '0' + hex : hex;
    }).join('');

  return (
    <div className="Box-color" style={{ backgroundColor: `rgb(${r}, ${g}, ${b})`, width: "400px",  height: "80px", textAlign: "center", verticalAlign: "bottom" }}>

        rgb({r}, {g}, {b}) <br />
        {rgbToHex(r, g, b)}    

    </div>
  );
};
