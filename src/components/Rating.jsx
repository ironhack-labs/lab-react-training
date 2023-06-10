function Rating(props) {
  return (
    <div>
      {props.children === '0' ? <p>☆☆☆☆☆</p> : null}
      {props.children >= '1' && props.children < '1.8' ? <p>★☆☆☆☆</p> : null}
      {props.children >= '1.9' && props.children < '2.8' ? <p>★★☆☆☆</p> : null}
      {props.children >= '2.9' && props.children < '3.8' ? <p>★★★☆☆</p> : null}
      {props.children >= '3.9' && props.children < '4.8' ? <p>★★★★☆</p> : null}
      {props.children >= '4.9' ? <p>★★★★★</p> : null}
    </div>
  );
}

export default Rating;
