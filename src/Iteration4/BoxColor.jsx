const BoxColor = ({ r, g, b }) => {
    const backgroundColor = `rgb(${r}, ${g}, ${b})`
    
    return (
        <div style={{backgroundColor}}>
            <h5>rgb({r},{g},{b})</h5>
       </div> 
    )
}

export default BoxColor