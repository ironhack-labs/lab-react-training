import './ColorCard.css'

const ColorCard = ({r, b, g}) => {
    function componentToHex(c) {
      const hex = c.toString(16);
      //add necessary padding to hex!
      return hex.length === 1 ? '0' + hex : hex;
    }
    function rgbToHex(r, g, b) {
      return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
    }
    return (
      <article className="ColorCard">
        <section
          style={{ background: `rgb(${r},${g},${b})` }}
          className="ColorCard__wrapper"
        >
          <p className="ColorCard_rgb ColorCard_p">
            rgb({r},{g},{b})
          </p>
          <p className="ColorCard_p">{rgbToHex(r, g, b)}</p>
        </section>
      </article>
    );
}
 
export default ColorCard;