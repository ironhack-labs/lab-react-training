import React from 'react'

class LikeButton extends React.Component {
    state={
        clickCount:0,
        colorIndex:0,
        colors: ['purple','blue','green','yellow','orange','red'],
        clickBorder:'none'
    }

    clickHandler = () => {

        if(this.state.colorIndex>=5){
            this.state.colorIndex=0
        }
        if(this.state.clickBorder==='none'){
            this.state.clickBorder="6px solid rgb(204, 255, 255)"
        }

        // console.log(this.state.colorIndex)
        this.setState({
            clickCount: this.state.clickCount + 1,
            colorIndex: this.state.colorIndex + 1,
            clickBorder:this.state.clickBorder
        })
        // this.setState((state,props) => ({
        //     counter:state.clickCount +1
        // }));
        //console.log(this.state.clickCount)

    }



    render() {
        return (
            <>
                <button style= {{backgroundColor: this.state.colors[this.state.colorIndex], color:"white",margin:'5px', border:this.state.clickBorder}} onClick={this.clickHandler}>{this.state.clickCount} Likes</button>
            </>
        )
    }
}

export default LikeButton;