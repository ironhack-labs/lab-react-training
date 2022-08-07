const Rating = (props) => {
    const rate = Number(props.children)
    return (
      <div style={{fontSize: '40px', fontWeigth: '15px'}}>
        {Math.round(rate) === 0 && '☆☆☆☆☆'}
        {Math.round(rate) === 1 && '★☆☆☆☆'}
        {Math.round(rate) === 2 && '★★☆☆☆'}
        {Math.round(rate) === 3 && '★★★☆☆'}
        {Math.round(rate) === 4 && '★★★★☆'}
        {Math.round(rate) === 5 && '★★★★★'}
      </div>
    );
  };
  
  export default Rating;