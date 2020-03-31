import React from 'react'


const BoxColor = props => {
        let hexcolor = "#"+componentToHex(props.r)+componentToHex(props.g)+componentToHex(props.b)
        function componentToHex(x) {
            var hex = x.toString(16);
            if(hex.length === 0){
                return "00"
                
            }else if(hex.length === 1){
                return "0"+ hex
            }
            return hex
        }
    const style = {backgroundColor: `rgb(${props.r},${props.g},${props.b})`,height: '80px'};
    return (
       
            <div style = {style}>
            <p style = {{textAlign: 'center',alignItems:'center',paddingTop: '10px'}}>
           rgb({props.r},{props.g},{props.b})
           </p>
           <p style = {{margin:'0px', textAlign:'center'}}>{hexcolor}</p>
           </div>
       
    )
}

export default BoxColor
