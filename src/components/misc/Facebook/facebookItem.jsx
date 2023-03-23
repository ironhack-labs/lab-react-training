import { Component } from 'react';

const MemberValuePair = ({ title, value }) => {
  return (
    <p><strong>{title}: </strong>{value}</p>
  )
}

class FacebookItem extends Component {
  state = {
    showInfo: false,
  }

  toggleInfo = () => {
    this.setState(prevState => {
      return {
        showInfo: !prevState.showInfo
      }
    })
  }

  render() {
    const { selected, img, firstName, lastName, country, isStudent } = this.props;

    return (
      <div className={`FacebookItem border-box ${selected ? 'FacebookItem-select' : ''}`}>
        <div className="FacebookItem-img" onClick={this.toggleInfo} >
          <img src={img} alt="" />
        </div>
        {this.state.showInfo && (
          <div>
            <MemberValuePair title="First name" value={firstName} />
            <MemberValuePair title="Last name" value={lastName} />
            <MemberValuePair title="Country" value={country} />
            <MemberValuePair title="Type" value={isStudent ? 'Student' : 'Teacher'} />
          </div>
        )}
      </div>
    )
  }
}

export default FacebookItem;