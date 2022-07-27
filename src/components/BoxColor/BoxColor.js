export const BoxColor = ({ r, g, b }) => {

    function color(r, g, b) {
        return "rgb(" + r.toString() + ","+g.toString() +","+ b.toString() +")"
    }

  const divStyle = {
    color: 'white',
    backgroundColor: color(r,g,b),
  };

  return (
    <div style={divStyle}>
      <p>
        rgb ({r},{g},{b})
      </p>
      
    </div>
  );
};
