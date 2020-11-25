
const Num = ({num}) => {
    //const[color, setColor] = useState("white")
    let color;
    if(num%2 ==0){
        color="red"
    }else{
        color="white"
    }
   return <div style={{height: "50px", width: "50px", backgroundColor: `${color}`}}>
      {num}
    </div>
  }



export default Num