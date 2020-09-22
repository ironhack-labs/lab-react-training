import React, { Component } from 'react';

export default class ClickablePicture extends Component {
    render() {
        return (
            <div>
                <img src="{this.props.img}" />
                <image>{this.props.img}</image>
            </div>
        )
    }
} 