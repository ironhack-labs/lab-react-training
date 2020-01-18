import React from "react";
import FacebookProfile from "./FacebookProfile";
import profiles from "../../data/berlin.json"
import Controls from "./Controls";
const Facebook = () => {
  
  
  return (

    <div>
      {/* <Controls profiles={profiles}/> */}
      <FacebookProfile profiles={profiles}/>

    </div>
		
	);
};

export default Facebook;
