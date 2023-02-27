
import './../BoxColor/BoxColor.css'


const BoxColor = ({ r, g, b }) => {


    const divStyle = {
        backgroundColor: `rgb(${r}, ${g}, ${b})`
    }


    return (

        <article className="boxColor">
            <div

                style={divStyle}>
                <p>rgb(${r}, ${g}, ${b})</p>

            </div >
        </article>
    )



}


export default BoxColor