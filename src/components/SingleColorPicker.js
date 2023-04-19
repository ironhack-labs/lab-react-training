function SingleColorPicker({color, value, onChange}){
    return(
        <div>
            {color === "r" && 
            <div className="single-color-picker">
                <div className="red square"></div>
                <label htmlFor="red">R:</label>
                <input type="number" name="red" id="red" min="0" max="255" value={value} onChange={onChange}/>
            </div>}

            {color === "g" &&
            <div className="single-color-picker">
                <div className="green square"></div>
                <label htmlFor="green">G:</label>
                <input type="number" name="green" id="green" min="0" max="255" value={value} onChange={onChange}/>
            </div>}

            {color === "b" &&
            <div className="single-color-picker">
                <div className="black square"></div>
                <label htmlFor="blue">B:</label>
                <input type="number" name="blue" id="blue" min="0" max="255" value={value} onChange={onChange}/>
            </div>}

        </div>

    )
}

export default SingleColorPicker