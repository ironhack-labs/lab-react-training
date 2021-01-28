import React from 'react'
import './SingleColourPicker.css'

 class SingleColourPicker extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            colour:this.props.colour,
            value: this.props.value
        }
    }

    colourChangeHandler = (e) => {
        const val = e.target.value
        this.setState({
            value: val
        })

        this.props.colourChange(this.state.colour, val)

    }

    // backgroundColor:`rgb(${rgb})`,
    render(){
        let rgb=''
        if(this.state.colour === 'r'){
            rgb = `${this.state.value},0,0`
        }else if(this.state.colour === 'g'){
            rgb= `0,${this.state.value},0`
        } else if(this.state.colour === 'b'){
            rgb=`0,0,${this.state.value}`
        }
        return (
            <div className="columns">
                <div className="column is-1">
                    <div style={{backgroundColor:`rgb(${rgb})`,width:'50px', height:'50px'}}/>
                </div>
                <div className="column is-2">
                    <p>{this.state.colour}: 
                        <input type="number" max={255} min={0} value={this.state.value} onChange={this.colourChangeHandler}/>
                    </p>
                </div>
            </div>
    )
    }
    
}


export {SingleColourPicker}