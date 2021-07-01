function renderCardNumber(num) {
    return `•••• •••• •••• ${num.slice(num.length - 4)}`;
}

function renderLogo(type) {
  switch (type) {
    case 'Visa':
      return (
        <img
          style={{ width: '50px', height: 'auto' }}
          src="https://logos-marcas.com/wp-content/uploads/2020/04/Visa-Logo-650x366.png"
          alt=""
        ></img>
      );
    case 'Master Card':
      return (
        <img
          style={{ width: '50px', height: 'auto' }}
          src="https://upload.wikimedia.org/wikipedia/commons/b/b7/MasterCard_Logo.svg"
          alt=""
        ></img>
      );
    default:
      break;
  }
}

export {renderLogo, renderCardNumber}
