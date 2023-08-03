import './BoxColor.css'

const BoxColor = ({ r, g, b}) => {

    const background = {
        backgroundColor: `rgb(${ r },${ g },${ b })`
      };

      const paragraph = {
        textAlign: "center",
        padding: "40px",
        border: "solid black 1px"
      }


    return (    
            <div style={background}>
                <p style={paragraph}>rgb({r}, {g}, {b})</p>
            </div>
    );
}

export default BoxColor;