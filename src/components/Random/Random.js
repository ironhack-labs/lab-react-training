
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
        return Math.floor(Math.random() * this.max) + this.min;
    }


    render(){
          return (
                <p>
                Random value between {this.min} and {this.max} =&gt; {this.getRandom()};
                </p>
            );
    }


}



export default Random;