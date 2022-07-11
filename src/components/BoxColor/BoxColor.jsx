const BoxColor = ({ r, g, b }) => {

    const Style = {
        backgroundColor: `rgb(${r},${g},${b})`,
        width: 300,
        height: 60

    }


    return (
        <>
            <div style={Style}></div>



        </>
    )
}

export default BoxColor