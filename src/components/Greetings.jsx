function Greetings(props) {
  let greeting = '';
  if (props.lang === 'de') {
    greeting = 'Hallo';
  } else if (props.lang === 'fr') {
    greeting = 'Bonjour';
  }
  return (
    <div class="greetings">
      <div className="row mx-1 my-2">
        <div className="col">
          <div className="card border-dark">
            <div className="card-body text-start">
              <h4 className="card-title" lang={props.lang}>
                {greeting} {props.children}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Greetings;
