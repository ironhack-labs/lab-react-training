import React from "react";
import FacebookProfile from "./FacebookProfile";
import profiles from "../data/berlin.json"



const Facebook = () => {


  return (

    <div>

      <FacebookProfile profiles={profiles}/>

    </div>

	);
};

export default Facebook;