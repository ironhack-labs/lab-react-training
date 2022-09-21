function BoxColor(props){
    const{r,g,b} = props
return(
    <div className="color" style={{background: `rgb(${r},${g},${b})`}}>
        <p>rgb({r},{g},{b})</p>
    </div>
)
}

export default BoxColor