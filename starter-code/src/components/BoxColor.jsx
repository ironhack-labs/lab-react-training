import React, {Component} from 'react';
import BoxColorComp from './BoxColorComp';

class BoxColor extends Component {
  state = {
    colors: [
      {
        rgb: 'rgb(255,0,0)',
        hash: '#ff0000',
        bsclass: 'bg-danger',
      },
      {
        rgb: 'rgb(128,255,0)',
        hash: '#80ff00',
        bsclass: 'bg-info',
      },
    ],
  };
  render () {
    return (
      <div>
        {this.state.colors.map ((color, index) => {
          return (
            <BoxColorComp
              key={index}
              rgb={color.rgb}
              hash={color.hash}
              bsclass={color.bsclass}
            />
          );
        })}
      </div>
    );
  }
}

export default BoxColor;
//
