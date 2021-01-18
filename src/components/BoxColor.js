import React from 'react'
import '../components/BoxColor.css'


class BoxColor extends React.Component {
    render() {
        let myStyle = {
            'backgroundColor': `rgb(${this.props.r}, ${this.props.g}, ${this.props.b})`
        }

        let hex = (r,g,b) => {
            return"#"+((1<<24)+(r<<16)+(g<<8)+ b).toString(16).slice(1);
        }
        return (
            <div className='BoxColor' style = {myStyle}>
                    {`rgb(${this.props.r}, ${this.props.g}, ${this.props.b})`}
                    <br/>
                    {`${hex(this.props.r,this.props.g,this.props.b)}`}
            </div>
        );
    }
}

export default BoxColor;