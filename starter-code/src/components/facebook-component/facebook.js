import React, { Component } from 'react';
import './facebook.css';
import facebookData from '../../data/berlin.json';

export default class Facebook extends Component {
   constructor(props) {
       super(props);
       this.state = {
           styleProfile:{backgroundColor:'white'},
           styleProfileSel: {backgroundColor:'rgba(0,255,0,0.5)'},
           btn:"",
           dispNone:{display:'none'},
           dispBlock: {display:'block'},
           disp:{}
       }
       
   }
   displayAll = (pro) => {
      this.setState({
          disp:pro
      });
   }
    displayProfile = () => {
      return facebookData.map((profile,ind) => {
        return (
            <div key={ind} className="profile" style = {this.state.btn === profile.country ? this.state.styleProfileSel : this.state.styleProfile}>
              <button onClick={() => {this.displayAll(profile)}}><img src= {profile.img} alt="profileImage"/></button>
              <div className="details" style={this.state.disp === profile ? this.state.dispBlock : this.state.dispNone}>
                  <div className="det"><label>First Name: </label><p>{profile.firstName}</p></div>
                  <div className="det"><label>Last Name: </label><p>{profile.lastName}</p></div>
                  <div className="det"><label>Country: </label><p>{profile.country}</p></div>
                  <div className="det"><label>Type: </label><p>{profile.isStudent ? 'Student' : 'Teacher'}</p></div>
              </div>
            </div>
        )
      })
    }
    check = (btn) => {
     facebookData.forEach(pro => {
         if(btn === pro.country) {
         
             this.setState({
                btn: btn
             })
         } 
     })
    }
    displayButtonPro = () => {
        let btns = [];
        facebookData.forEach(dt => {
            btns.push(dt.country);
        });
       
        let btnsUnique = [...new Set(btns)];
     
        return btnsUnique.map((btnUni,ind) => {
            return (
               <button key={ind} style = {this.state.btn === btnUni ? this.state.styleProfileSel:this.state.styleProfile} onClick={() => {this.check(btnUni)}}>{btnUni}</button>
            )
            })
            
    }
    render() {
        
        return (
            <div className="fb">
               <div className="btn-content">
                 {this.displayButtonPro()}
                </div>
                {this.displayProfile()}
            </div>
        )
    }
}
