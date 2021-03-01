function Rating({ children }) {

  const stars = () => {

  if (children < 1) {
    return '00000'
  } else if (1 < children < 2) {
    return '**000'
  } else if (2 < children < 3) {
    return '***00'
  } else if (children === 3 || children < 4) {
    return '****0'
  } else if  (4 < children) {
    return '*****'
  }
}

    return (
      <section className="my-3 text-start ms-3 me-3">
        <h1 className="mb-3 fw-bold ">{stars()}</h1>        
      </section>
    )
  }
  
  export default Rating