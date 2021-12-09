


const BoxColor = (props) => {
    return (
        <div style={{borderStyle: "solid", margin:5, backgroundColor:`rgb(${props.r},${props.g},${props.b})`}}>
        rgb({props.r},{props.g},{props.b}) 
      </div>
    );
};
  


export default BoxColor;

