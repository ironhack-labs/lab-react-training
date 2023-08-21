import './BoxColor.css'

const BoxColor = ({ r, g, b }) => {

    return (
        <>
            <div class='container4' style={{ backgroundColor: ` rgb(${r}, ${g}, ${b})` }}> rgb({r},{g}, {b}) </div >
        </>
    )
}

export default BoxColor