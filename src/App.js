import { useState } from 'react';
import './App.css';
import IdCard from './components/IdCard';
import data from "./infocards";


function App() {
  const [infocards] = useState(data);
  const cardpeople = infocards.map((card) => {
    return (
      <IdCard 
        infocards={card}
      />
    );
  });

  return(
    <div>
      {cardpeople}
    </div>
      
    
  );
};

export default App;