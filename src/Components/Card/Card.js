import './Card.css';

const Card = props => {
  const { data } = props;

  return (
    <div className='card mb-3 mt-4'>
      <div className="row g-0 my-2 mx-2 " >
        <div className='d-flex justify-content-start'>
          <img src={data.img}></img>
          <div className="card-body text-start ">
            <p ><span className="fw-bold ">Name:</span> {data.firstName}</p>
            <p ><span className="fw-bold">Lastname:</span> {data.lastName}</p>
            <p ><span className="fw-bold">Gender:</span> {data.gender}</p>
            <p ><span className="fw-bold">Height:</span> {data.height/100}m</p>
            <p ><span className="fw-bold">Birth:</span>{data.birth.toDateString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};


      export default Card


