function BoxColor(props) {
    const {r,g,b} = props;
    
    const color = (`rgb(${r}, ${g}, ${b})`)
    

  return (
    <div className="boxColor" style={{backgroundColor: color}}>
    <p>{color}</p>
    </div>
  )
}

export default BoxColor;