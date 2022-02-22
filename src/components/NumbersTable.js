const NumbersTable = ({limit}) => {

const arr = []

  const style = {
      color: 'grey',
      width: "120px",
      height: "120px",
        border: "solid black",
    display:"flex",
    justifyContent: "center",
    alignItems: "center"

     
      
    };

      const styleRed = {
      color: 'black',
      width: "120px",
      height: "120px",
      backgroundColor: "red",
       border: "solid black",
         display:"flex",
    justifyContent: "center",
    alignItems: "center"
     
    
    };


    const styleContainer = {
        display:"flex",
        flexWrap: "wrap"
    }

for (let i = 1; i <= limit; i++) {
if(i % 2 != 0) {
    const a = <><div style={style} >{i}</div></>
     arr.push(a)

} else {
    const a = <><div style={styleRed}>{i}</div></>
     arr.push(a)

}
    


  

}





    return (<>

<div style={styleContainer}>
 { arr.map((x =>{ return x} )

)}

</div>
    </>)


 }
export default NumbersTable;