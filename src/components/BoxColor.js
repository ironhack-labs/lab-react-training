function BoxColor({r, g, b}){
    return(
        // eslint-disable-next-line no-template-curly-in-string
        <div className="box-color" style={{
            backgroundColor: `rgb(${r},${g},${b})`,
            width: '200px',
            margin: 'auto',
            border: '1px solid black'
            }}>
            <p>rgb({r}, {g}, {b})</p>
            <p>#{r.toString(16).padStart(2, '0')}{g.toString(16).padStart(2, '0')}{b.toString(16).padStart(2, '0')}</p>
        </div>

    )
}

export default BoxColor;