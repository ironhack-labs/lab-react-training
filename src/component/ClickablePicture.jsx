import React from 'react';

 class ClickablePicture extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          active: false,
        };
    }

    toggleGlasses = () => {
        this.setState({
          active: !this.state.active
        });
      };

   render() {
     return (
       <div class="Clickable-Picture">
         <img 
         src={this.state.active ? this.props.imgClicked : this.props.img} 
         alt="picture" 
         onClick={this.toggleGlasses}
        />
        </div>
     );
   }
 }

 export default ClickablePicture;