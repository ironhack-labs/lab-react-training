function BoxColor(props) {
    const{r,g,b}=props
    console.log(props)
    const styles={background:`rgb(${r},${g},${b})`}
return (
    <div style={styles} className="color">rgb(${r},${g},${b})</div>
  )
}

export default BoxColor