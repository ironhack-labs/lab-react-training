import './App.css';
import React from 'react';

const Pathimg = {
    NoGlass:"/img/persons/maxence.png",
    Glass:"/img/persons/maxence-glasses.png"
}

class  ClickablePic extends React.Component {
   state ={
       open:true
   }

   toggleImage = () => {
       this.setState(state => ({open:!state.open}))
   }

   getImageName =() => this.state.open ? "NoGlass" : "Glass";

   render() {
        const imageName = this.getImageName();
    return(
        <div className="ClickPic">
            <img style={{maxWidth:"150px"}} src={Pathimg[imageName]} onClick={this.toggleImage} alt="images"/>
        </div>
        )
    }
}

export default ClickablePic
