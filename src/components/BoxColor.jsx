import '../assets/styles/box-color.css';

function BoxColor(props) {
  const backgroundStyle = {
    background: `rgb(${props.r}, ${props.g}, ${props.b})`,
  };

  return <div className="box-color" style={backgroundStyle}></div>;
}

export default BoxColor;
