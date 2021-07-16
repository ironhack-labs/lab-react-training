import { Component } from "react";
import './IdCard.css'

class IdCard extends Component {
    render() {
        return (
            <>
                <div id='container'>

                    <section id='photo-container'>
                        <img src={this.props.picture} />
                    </section>

                    <section id='information-container'>
                        <div className='information'>
                            <span><p>First Name:&nbsp; </p></span>
                            <p>{this.props.firstName}</p>
                        </div>

                        <div className='information'>
                            <p><span>Last Name:&nbsp;</span></p>
                            <p>{this.props.lastName}</p>
                        </div>

                        <div className='information'>
                            <p><span>Gender:&nbsp;</span></p>
                            <p>{this.props.gender}</p>
                        </div>

                        <div className='information'>
                            <p><span>Height:&nbsp;</span></p>
                            <p>{this.props.height / 100}m</p>
                        </div>

                        <div className='information'>
                            <p><span>Birth:&nbsp;</span></p>
                            <p>{this.props.birth.toString().slice(0, 15)}</p>
                        </div>
                    </section>

                </div>
            </>
        )
    }
}

export default IdCard