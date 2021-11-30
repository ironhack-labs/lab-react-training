import './BoxColor.css'

const BoxColor = (props) => {
    const { r, g, b } = props;
    return( 
        <div className="BoxColor" style={{ backgroundColor: `rgb(${r},${g},${b})` }}>
            <p>{`rgb(${r},${g},${b})`}</p>
        </div>
    );
  }
  
  export default BoxColor;