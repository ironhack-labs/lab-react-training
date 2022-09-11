const Random = ({ min, max }) => {
  let number = Math.floor(Math.random() * max - min) + 1 + min;

  const mystyle = {
    display: 'flex',
    alignItems: 'center', 
    border: 'solid 1px', 
    marginBottom: '4px',
  }; 
  
  return  (
  
  <div className="Random">
    <span style={mystyle}>
      Random value between {min} and {max} {'=>'} {number}
    </span>
  </div>
  );
};


export default Random;
