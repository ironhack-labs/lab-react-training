import React from 'react'

class LikeButton extends React.Component {
  
    

    state = {
        count: 0,
        clicks: 0
    };

    colors =  ['purple','blue','green','yellow','orange','red']
                
    

    likeClick = () => {
        this.setState({
            count: this.state.count + 1,
            clicks: this.state.clicks < this.colors.length + 1 ? this.state.clicks - 1 : 0,
        })
    }    

    
    
    render() {

        let styles = {
                color:'white',
                background: this.colors[this.state.clicks],
        }
        return (
           
            <div>
            <button className='btn btn-primary' styles={styles} onClick={this.likeClick}>{this.state.count} Likes</button>
        </div>
        );
    }

}



export default LikeButton




