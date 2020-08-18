import React, {Component} from 'react'

class IdCard extends Component{

  render(){
    return(
      <article className='iteration-card'>
        <div>
          <img src={this.props.picture} alt='' width='150'/>
        </div>
        <div className='iteration1-info'>
          <p><strong>First name:</strong> {this.props.firstName}</p>
          <p><strong>Last name:</strong> {this.props.lastName}</p>
          <p><strong>Gender:</strong> {this.props.gender}</p>
          <p><strong>Height:</strong> {this.props.height}m</p>
          <p><strong>Birth:</strong> {this.props.birth.toString().slice(0, 15)}</p>
        </div>
      </article>
    )
  }
}

export default IdCard