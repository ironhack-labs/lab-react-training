import './BoxColor.css'

const BoxColor = ({ r, g, b }) => {

    return (
        <div style={{
            backgroundColor: `rgb(${r}, ${g}, ${b})`,
            width: '40%',
            height: '3rem',
            marginTop: '1rem',
            border: 'solid',
            padding: '3rem'
        }}>
            <p> rgb{r}, {g}, {b}</p>
        </div>
    )
}

export default BoxColor