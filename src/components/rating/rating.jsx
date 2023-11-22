
function Rating({ children }){

  const rounded = Math.round(children);
  const fill = "★".repeat(rounded)
  const empty = "☆".repeat(5-rounded)

  return <div style={{fontSize:"60px"}}>{fill}{empty}</div>;


}

export default Rating