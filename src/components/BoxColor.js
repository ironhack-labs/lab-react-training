const BoxColor = props => {

const {r, g, b} = props
 //   background-color:rgba(255,0,0,0.3)
//  backgroundImage: 'url(' + imgUrl + ')',
const colorRect = {
backgroundColor: 'rgba('+r+','+g+','+b
+')',
height: "50px"
}


    return (<>

<div style= {colorRect}>rgb({r},{g},{b})</div>


    </>)
}


export default BoxColor;