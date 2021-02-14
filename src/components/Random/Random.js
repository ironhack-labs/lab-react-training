
import React from 'react';

// const Random = ({ min, max }) => {
//   const random = Math.floor(Math.random() * max) + min;
//   return (
//     <p>
//       Random value between {min} and {max} =&gt; {random}
//     </p>
//   );
// };


class Random extends React.Component {

    constructor(props){
        super(props);
        this.min = props.min;
        this.max = props.max;
  
    }

    getRandom(){
        const {min, max} = this.props;
        return Math.floor(Math.random() * max) + min;
    }


    render(){
          return (
                <p>
                Random value between {this.props.min} and {this.props.max} =&gt; {this.getRandom()};
                </p>
            );
    }


}



export default Random;