import React from 'react';

const Greeting = (props) =>
<div style = {{border: '1px solid black'}}>
 <p lang= { props.lang }> {`${props.texto} mi buen Paquito`} </p>
</div>

export default Greeting