import'./assets/visa.png'
const CreditCard = props => {
    const { dataCreditCard } = props;
    
    return (
      <div className='card mb-3 mt-4'>
        <div className="row g-0 my-2 mx-2 " >
          <div className='d-flex justify-content-start'>
            <img src={logoVisa}></img>
            <div className="card-body text-start ">
            </div>
          </div>
        </div>
      </div>
        );
  };


export default CreditCard