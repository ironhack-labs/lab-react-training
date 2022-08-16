function IdCard(props) {
  const { idInfo } = props;
/*   console.log(props); */
  return idInfo.map((elem, i) => {
    return (
      <div key={i} className='make-row'>
        <img src={elem.img} alt="" />
        <div className="make-columm">
        <p>First Name: {elem.firstName}</p>
        <p>Last Name: {elem.lastName}</p>
        <p>Country: {elem.country}</p>
        </div>
      </div>
    );
  });
}

export default IdCard;
