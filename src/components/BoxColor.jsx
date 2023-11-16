function BoxColor(props) {

    const colour = props.hex

    return(
        <div className="BoxColor" 
        style={{backgroundColor:colour,padding: '50px'}}>
            <p>Color</p>
        </div>
    )
}

export default BoxColor;