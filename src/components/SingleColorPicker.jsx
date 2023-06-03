function SingleColorPicker(props){
    

    const colorDictonary={
        b: "black", 
        g: "green", 
        r: "red"
    }
    // color = "b"
    // value = { bValue }
    // onChange = {() => { /* ... */ }

 return (
     <div className="row">
         <div className="col-2" style={{ backgroundColor: (colorDictonary[props.color]), color: (colorDictonary[props.color]) }}>
             {"•"}
         </div>
         <div className="col-10">
             <input type="number" max={255} min={0} value={props.value}
              onChange={(e)=>{
                props.onChange(e.target.value)
             }} />
         </div>
     </div>
 )
}

export default SingleColorPicker