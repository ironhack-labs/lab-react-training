const BoxColor = (props) => {
    return(
        <div class="card" style= {{ backgroundColor: `rgb(${props.r},${props.g},${props.b})` }}>
            <p>rgb({props.r},{props.g},{props.b})</p>
        </div>
    )
}

export default BoxColor