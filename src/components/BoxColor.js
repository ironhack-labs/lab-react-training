const BoxColor = ({ r, g, b}) => {

    const background = {
        backgroundColor: `rgb(${ r },${ g },${ b })`
      };

      const paragraph = {
        textAlign: "center",
        padding: "40px",
        border: "solid black 1px"
      }

      const valueToHex = (n) => {

        const hex = n.toString(16)

        return hex
      }

      const rgbToHex = (r, g, b) => {
      return `#${(valueToHex(r) + valueToHex(g) + valueToHex(b))}`
      }


    return (    
            <div style={background}>
              <div style={paragraph}>
                <p>rgb({r}, {g}, {b})</p>
                <p>{rgbToHex(r, g, b)}</p>
                </div>
            </div>
    );
}

export default BoxColor;