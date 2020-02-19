import React, { PureComponent } from 'react';

class Boxcolor extends PureComponent {
    render() {
        let { r,g,b } = this.props
        let hex = '#'
          + ('0'+r.toString(16)).substr(-2)
          + ('0'+g.toString(16)).substr(-2)
          + ('0'+b.toString(16)).substr(-2)
        return (
            <div className="BoxColor box" style={{
                backgroundColor: `rgb(${r},${g},${b})`,
              }}>
                rgb({r},{g},{b})<br/>
                {hex}
            </div>
        );
    }
}



export default Boxcolor;