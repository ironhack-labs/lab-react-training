import React from 'react';
import './id-card.css';

class IdCard extends React.Component {
    render() {
return (
<div className="card mb-3 self-card" >
  <div className="row no-gutters">
    <div className="col-md-4">
      <img src={this.props.picture} className="card-img self-img" alt="..." />
    </div>
    <div className="col-md-8">
      <div className="card-body self-body">
        {/* <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
        <div className="content"><label >First name: </label><p>{this.props.firstName}</p></div>
        <div className="content"><label >Last name: </label><p>{this.props.lastName}</p></div>
        <div className="content"><label >Gender: </label><p>{this.props.gender}</p></div>
        <div className="content"><label >Height: </label><p>{this.props.height}</p></div>
        <div className="content"><label >Birth: </label><p>{this.props.birth.toDateString()}</p></div>
      </div>
    </div>
  </div>
</div>
);
    }
}
export default IdCard;