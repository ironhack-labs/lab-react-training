import { Component } from "react";


class LikeButton extends Component {

    state = {
        value: 0
    }

    handleLike = () => {
        this.setState((state) => ({
            value: state.value + 1
        }))
    }


    render() {
        return(
            <div>
                <button type="button" className="btn btn-danger ms-5 mt-2 " onClick={this.handleLike}>Like {this.state.value}</button>
            </div>
        )
    }
}
export default LikeButton