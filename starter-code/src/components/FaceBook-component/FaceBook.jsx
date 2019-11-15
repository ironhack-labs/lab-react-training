import React, { Component } from "react";
import IdCard from "../id-card-component/IdCard";

export default class FaceBook extends Component {

  render() {
    return (
      <div>
        {this.props.data.map((profile, i) => {
          return (
            <IdCard
              key={i}
              picture={profile.img}
              firstName={profile.firstName}
              lastName={profile.lastName}
              country={profile.country}
              type={profile.isStudent}
            />
          );
        })}
      </div>
    );
  }
}
