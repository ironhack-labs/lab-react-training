import React, {Component} from 'react'

class TextareaAndSelectTagDemo extends Component {
    constructor(){
      super();
      this.state = {
          selectInputValue: "Notebook",
          textareaInputValue: "..."
      }
    }
  
    handleChange(event) {
      const { name, value } = event.target;
      this.setState({[name]: value});
    }
  
    handleSubmit = (event) => {
        event.preventDefault()
        alert(this.state.selectInputValue + ' <==> ' + this.state.textareaInputValue);
    }
  
    render(){
      return(
        <form onSubmit={this.handleSubmit}>
          <label> Pick your favorite movie: </label>
  
          <select name="selectInputValue" value={this.state.selectInputValue} onChange={e => this.handleChange(e)} >
            <option value={this.state.selectInputValue}>{this.state.selectInputValue}</option>
            <option value="Star Wars">Star Wars</option>
            <option value="The Godfather">The Godfather</option>
            <option value="Titanic">Titanic</option>
            <option value="Seven">Seven</option>
          </select>
          
          <label> Why is this your favorite movie? </label>
          <textarea name="textareaInputValue" value={this.state.textareaInputValue} onChange={e => this.handleChange(e)} />
          
          <input type="submit" value="Submit" />
        </form>
      )
    }
  }
  
  export default TextareaAndSelectTagDemo;