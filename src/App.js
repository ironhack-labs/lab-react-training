import React from "react";
import IdCard from "./idcard/IdCard";

const App = () => {
  return (
    <>
      <IdCard lastName="Doe" firstName="John" gender="male" height={178} birth={new Date("1992-07-15")} />
    </>
  );
};

export default App;