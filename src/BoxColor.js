function BoxColor(props) {

        let r = props.r;
        let g = props.g;
        let b = props.b;

        let cor = (r + ',' +  g  + ',' + b);
    
        let divStyle = {
            backgroundColor: (`rgb(${cor})`)
        };
    
    return (
        <div className="boxcolor" style={divStyle}>
          rgb {"("} 
          {props.r}, {props.g}, {props.b} {")"}
          <br />
        </div>
      );
};

export default BoxColor;

