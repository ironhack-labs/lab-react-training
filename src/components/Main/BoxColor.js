const BoxColor = ({r,g,b}) => {
    const rgb = []

    rgb.push({r})
    rgb.push({g})
    rgb.push({b})
    console.log(rgb)
    return (
        
        <div style={{backgroundColor:{rgb}}}>
            <p>rgb({rgb})</p>
        </div>
    )
}

export default BoxColor
