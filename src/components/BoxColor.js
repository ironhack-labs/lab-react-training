function BoxColor(props){
    const {r, g, b} = props
    return(
        <div class="caja" style={{background: `rgb(${r}, ${g}, ${b})`, padding: `20px`}}>
            <p>rgb({r},{g},{b})</p>
        </div>
    )
      
}

export default BoxColor