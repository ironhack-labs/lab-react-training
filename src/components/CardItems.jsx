
const CardItems = (props) => {
    return (
      <div className="flex justify-evenly flex-wrap">
        {props.children}
      </div>
    );
  };
  
  export default CardItems;