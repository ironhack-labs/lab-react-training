import React, { Component } from 'react'

export default class ClickablePicture extends Component {
        state = {
            isClicked: false
            // pictureUrl: 'https://canary.contestimg.wish.com/api/webimage/5cb470dab9ce875e68a8e472-1-large.jpg',
        }

        // clickHandler = () => {
        //     if (this.state.pictureUrl === 'https://canary.contestimg.wish.com/api/webimage/5cb470dab9ce875e68a8e472-1-large.jpg')
        //      {
        //         this.setState((state) => ({
        //             pictureUrl:'https://canary.contestimg.wish.com/api/webimage/5cb470dab9ce875e68a8e472-6-large.jpg'
        //           }));    
            
        // } else {
        //     this.setState((state) => ({
        //         pictureUrl:'https://canary.contestimg.wish.com/api/webimage/5cb470dab9ce875e68a8e472-1-large.jpg'
        //       }));    
        //     };
        // }
    clickHandler = () => {
        this.setState((state) => ({
            isClicked: !state.isClicked
        })
        )
    }

    render() {
        return (
           <img onClick= {this.clickHandler}
           src= {this.state.isClicked? 'https://canary.contestimg.wish.com/api/webimage/5cb470dab9ce875e68a8e472-6-large.jpg' : 'https://canary.contestimg.wish.com/api/webimage/5cb470dab9ce875e68a8e472-1-large.jpg'}
           alt="cat with frog ears"/>
           
        )
    }
}
