function BoxColor(props) {
    const {r, g, b} = props;

  return (
    <div>
      <div>
        <p style={{backgroundColor:`rgb(${r}, ${g}, ${b}`}}>rgb({r},{g},{b})</p>
      </div>
    </div>
  )
}

export default BoxColor