const BoxColor = ({ r, g, b }) => {
    return (
        <article className='box-color' style={{ backgroundColor: `rgba(${r}, ${g}, ${b})` }} >
            <h1>rgb({r}, {g}, {b})</h1>
        </article>
    )

}

export default BoxColor