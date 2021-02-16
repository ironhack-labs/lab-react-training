import React, {Component} from "react"

class SingleColorPicker extends Component {
    state = {
        color:this.props
    }

    handleChange = (e) => {
        const {name,value} = e.target;
        this.setState(state => ({
            ...state,
            [name]:value,
        }))
        this.props.onChange(this.state.color.color,value);
    }
    render(){
        const colors = {
            red:{
                color: "red",
                letter: "R",
                labelName: "rValue"
            },
            green:{
                color:"green",
                letter:"G",
                labelName:"gValue"
            },
            blue:{
                color:"blue",
                letter:"B",
                labelName:"bValue"
            }
        }
        return (
            <div style={{display:"flex",justifyContent:"space-evenly",alignItems:"center",maxWidth:"500px",margin:"15px auto"}}>
                <div style={{border:"2px solid black",width:"80px",height:"80px",background:`${colors[this.state.color.color].color}`}}></div>
                <div>
                    <form>
                    <label>{colors[this.state.color.color].letter}:</label>
                        <input onChange={this.handleChange} name={colors[this.state.color.color].labelName} style={{width:"80px"}} type="number" max={255} min={0} placeholder="255"></input>
                    </form>
                </div>
            </div>
        )
    }
}

export default SingleColorPicker;