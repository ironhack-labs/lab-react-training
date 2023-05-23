function BoxColor({r, g, b}) {
    return(
       <div style={{backgroundColor: `rgba(${r}, ${g}, ${b})`}}>
        <h2>r: {r} g: {g} b: {b}</h2>
       </div>
    )
}

export default BoxColor;