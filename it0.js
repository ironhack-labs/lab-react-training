import React from "react";
import img1 from '../img/img1.png';
import img2 from '../img/img2.png';
import img3 from '../img/img3.png';

import '../index.css';

export default function Idcard() {
  return <div className="main-id-cards">
        <div className="id-cards">
            <div className="id-inner">
                <div className="id-img">
                    <img className="img" src = {img1}></img>
                    <div className="id-content">
                    <p>First Name : jon</p>
                    <p>Last Name : Dev</p>
                    <p>Gender : Male</p>
                    <p>Height : 181cm</p>
                    <p>Birth : 1990/02/27</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="id-cards">
            <div className="id-inner">
                <div className="id-img">
                    <img className="img" src = {img2}></img>
                    <div className="id-content">
                    <p>First Name : <span>Levis</span></p>
                    <p>Last Name : <span>Rord</span></p>
                    <p>Gender : <span>Male</span></p>
                    <p>Height : <span>181cm</span></p>
                    <p>Birth : 1996/06/17</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="id-cards">
            <div className="id-inner">
                <div className="id-img">
                    <img className="img" src = {img3}></img>
                    <div className="id-content">
                    <p>First Name : Levis</p>
                    <p>Last Name : Lord</p>
                    <p>Gender : Male</p>
                    <p>Height : 155cm</p>
                    <p>Birth : 1994/08/22</p>
                    </div>
                </div>
            </div>
        </div>
       
    </div>
}
