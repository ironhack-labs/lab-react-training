function BoxColor(props){
    
    return (
        <div className="BoxColor">
            <div>
                <p>rgb({props.r}, {props.g}, {props.b})</p>
            </div>
        </div>
    )
}

export default BoxColor