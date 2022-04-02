

function BoxColor(props){
    const {r,g, b} = props;
    const divStyle = {
        backgroundColor: `rgb(${r}, ${g}, ${b})`
      };
     return( 
        <div className="boxColor" style={divStyle}>
      <p>rgb({r},{g},{b})</p>
    </div>
    );

}


export default BoxColor;