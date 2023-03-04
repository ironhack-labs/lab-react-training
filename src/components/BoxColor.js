function BoxColor({ r, g, b }){
    const backGround = 'rgba(' +r+','+g+','+b+')';
    const divStyle = { background : backGround, }
    return (
        <div className='box-color' style={divStyle}>
            {backGround}
        </div>
    )
}

export default BoxColor;