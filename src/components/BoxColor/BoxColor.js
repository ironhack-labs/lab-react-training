import "./BoxColor.css"

const BoxColor = ({r, g, b}) => {

      let divStyle = {
            backgroundColor: `rgb(${r},${g},${b})`,
            width: 200,
            height: 50 
        }

    return (
   

        <div style={divStyle}>rgb({r},{g},{b})</div>

        


    )

}



export default BoxColor


// const divStyle = {
//   color: 'blue',
//   backgroundImage: 'url(' + imgUrl + ')',
// };

// function HelloWorldComponent() {
//   return <div style={divStyle}>Hello World!</div>;
// }

//     <BoxColor r={255} g={0} b={0} />
//     <BoxColor r={128} g={255} b={0} />