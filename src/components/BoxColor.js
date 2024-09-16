export function BoxColor({r,g,b}){
    const rgb = `rgb(${r},${g},${b})`
   function valueToHex(color){
    return color.toString(16);
   }

    function rgbToHex(r,g,b){
        return('#' +valueToHex(r) + valueToHex(g) + valueToHex(b))
    }
    const hex = rgbToHex(r,g,b)
   return(
    <div className="p-2 border border-dark text-white" style={{backgroundColor: `${rgb}`}}>
    <p>{rgb}</p>
    <p>{hex}</p>
    </div>
   );
}