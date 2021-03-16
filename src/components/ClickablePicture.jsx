import React from 'react';

class ClickablePicture extends React.Component {
    
    state = {
        count: 1
    }

    handleClick = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (
        this.state.count % 2 === 0 ? 
        (
                <div>
                    <img onClick={this.handleClick} src={this.props.imgClicked} alt=""/>
                </div>
        ):
        (
            <div>
                <img onClick={this.handleClick} src={this.props.img} alt=""/>
            </div>
                )
        )
        }
}

export default ClickablePicture;