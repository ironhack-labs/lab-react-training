function BoxColor(props){
    const {r, g, b} = props;
    const bg = {
        backgroundColor: `rgb(${r}, ${g}, ${b})`
    }

    return(
        <div>
            <p style={bg}>rgb({r},{g},{b})</p>
        </div>
    )
}

export default BoxColor