//jshint esversion:9

export const SingleColorPicker = ({color, numValue, onChangeFn}) => {
    
    const handleOnChange = (e) => {
        onChangeFn(color, e.target.value);
    };

    return(
        
        <>
        <input type="number" min="0" max="255" value={numValue} onChange={handleOnChange}/>
        </>   
        
    )
};