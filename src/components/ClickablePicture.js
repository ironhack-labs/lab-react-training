import React from 'react';

class ClickablePicture extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = { image: this.props.img };
        }

        handleClick = () => {
            this.setState({ image: this.props.imgClicked });
        }

        render() {
            return (
                <img
                    src={this.state.image}
                    alt="clickable picture"
                    onClick={this.handleClick}
                    style={{height: '100px'}}
                    ></img>
            );
        }
    }

    export default ClickablePicture;
    


        
    
