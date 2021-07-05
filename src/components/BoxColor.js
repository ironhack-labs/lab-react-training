const BoxColor =({r,g,b})=>{
    return (
        <div style={{backgroundColor: `rgb(${r},${g},${b})`, width:"200px", height:"50px" }}>
            <p>rgb({r},{g},{b})</p>
        </div>
    )
}

export default BoxColor