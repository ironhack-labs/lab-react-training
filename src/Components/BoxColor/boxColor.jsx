function BoxColor(props){
    const {r, g, b} = props;

    return(
        <div>
            <p>rgb({r}, {g}, {b})</p>
        </div>
    );
}

export default BoxColor;