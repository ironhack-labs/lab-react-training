
const BoxColor = ({ r, g, b }) => {  

    return(
        <article>
            <p style={{
                backgroundColor: `rgb(${r}, ${g}, ${b})`,
                width: '100%',
                height: '100px',
                border: '2px black solid',
                textAlign: 'center'
            }}>rgb({r}, {g}, {b})</p>
        </article>

    )
    
}

export default BoxColor
