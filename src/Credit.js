function mask(num) {
  let arr = num.split('');
  let last = arr.slice(-4).join('');
  let first = arr
    .slice(0, -4)
    .join('')
    .replace(/[a-z\d]/gi, '*')
    .concat(last);
  return first;
}

function Credit(props) {
  return (
    <div>
      <div style={props.style}>
        <h4>{props.type}</h4>
        <p>{mask(props.number)}</p>
        <p>
          Expires {props.expirationMonth}/{props.expirationYear} {props.bank}
        </p>
        <p>{props.owner}</p>
        <p>{}</p>
        <p>{}</p>
      </div>
    </div>
  );
}
export default Credit;
