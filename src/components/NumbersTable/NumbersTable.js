import React,{Component} from "react";

class NumbersTable extends Component {
    state = {
        color:"white",
        limit: []
    }

    componentDidMount(){
            let limitArr = [];
            for(let i=0;i<this.props.limit+1;i++){
            if(i != 0){
                if(i%2 == 0){
                    limitArr.push(
                        <div style={{border:"1px solid black",width:"100px",height:"100px",display:"flex",alignItems:"center",justifyContent:"center",background:"red"}}>
                            <p style={{fontSize:"50px"}}>{i}</p>
                        </div>
                )
                } else {
                    limitArr.push(
                        <div style={{border:"1px solid black",width:"100px",height:"100px",display:"flex",alignItems:"center",justifyContent:"center",background:"white"}}>
                            <p style={{fontSize:"50px"}}>{i}</p>
                        </div>
                )
                }
            }
            }
            this.setState({limit:limitArr})
    }
    render(){
        return (
            <div style={{display:"flex",margin:"0 auto", flexWrap:"wrap",maxWidth:"600px"}}>
            {this.state.limit}
            </div>
        )
    }
}

export default NumbersTable;