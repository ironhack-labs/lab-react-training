export const RGBSingleColorPicker = ({color, single}) => {

    return(
        <div className="RGBSingleColorPicker">
            <div className="colorSquare" style={{backgroundColor:color}}></div>
            <p> {color}:</p>
            <input 
            type="number" 
            min="0" max="255" 
            onChange={(el) => single(color, el.target.value)}
            />
        </div>   
    )
}; 