import React, {Component} from "react";
import 'bulma/css/bulma.css'

class IdCard extends Component{
    
    state = {
        name: 'jp'
    }

    render(){
        return(
            <div className="column is-6">

                <div className="card">
                    <div className="card-image">
                        <figure className="image is-4by3">
                            <img src={this.props.picture} alt=""/>
                        </figure>
                    </div>
                    <div className="card-content">
                        <div className="media">
                    
                            <div className="media-content">
                                <p className="title is-4">First name: {this.props.firstName}</p>
                            </div>
                        </div>

                        <div className="content">
                            <p>Last name:{ this.props.lastName}</p>
                            <p>Gender:{ this.props.gender}</p>
                            <p>Height:  {this.props.height}m</p>
                            <p>Birth: {this.props.birth}</p> 
                            <br/>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}

export default IdCard
