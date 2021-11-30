import './Greetings.css';

const Greetings = (props) => {
  const getGreetings = (language) => {
    switch (language) {
    
    case "fr":
        return "Bonjour";
    case "de":
        return "Halo";
       default:
           return "Hello"; 
    }
  };
  return (
    <div className="Greetings">
      <div className="card-container">
        {getGreetings(props.lang)} {props.children}
      </div>
    </div>
  );
};

export default Greetings;
