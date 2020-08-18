import React from 'react'

class ClickablePicture extends React.Component{
  constructor (props){
    super (props)
    this.state= {
      url: `./img/dice${Math.random}.png`
    }
  }

    handleClick = () => {
      (this.state.url === this.props.img)?this.setState({url: this.props.imgClicked}):this.setState({url: this.props.img})    
  }
  render(){
    return (
      <button onClick={this.handleClick}><img src={this.state.url} alt=''/></button>
    )
  }
}



export default ClickablePicture