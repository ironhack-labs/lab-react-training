import React from 'react';
import "./LikeButton.css";


class LikeButton extends React.Component {
        
        state = {
                count: 0,
                indexColor:0,
                color : ['purple','blue','green','yellow','orange','red']
        };
        handleIncrementClick = () => {
                this.setState({
                        count: this.state.count + 1,
                        indexColor : Math.floor(Math.random()*this.state.color.length),
                })
        };
        render() {
        
                const divStyle = {
                        backgroundColor: this.state.color[this.state.indexColor]
                }
                return (
                        <div>
                                <button onClick={this.handleIncrementClick} style={divStyle} className="LikeButton"> {this.state.count} Likes</button>
                        </div>
                )
        }

}

export default LikeButton
