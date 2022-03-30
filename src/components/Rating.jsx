const Rating = (props) => {
  const result = [];
  for (let i = 0; i < Math.round(props.children); i++) {
    const el = <span key={Math.random() * 100} className="fa fa-star checked"></span>;
    result.push(el);
  }
  for (let i = 0; i < 5 - Math.round(props.children); i++) {
    const el = <span key={Math.random() * 100} className="fa fa-star"></span>;
    result.push(el);
  }
  return <div>{result}</div>;
};

export default Rating;
