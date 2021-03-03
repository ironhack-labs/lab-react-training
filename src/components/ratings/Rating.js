function Rating({ children }) {

  const stars = () => {
   let  roundedNumber = Math.round(children)

  if (roundedNumber === 0) {
    return <div>00000</div> 
  } else if (roundedNumber ===  1) {
    return <div>*0000</div>
  }else if (roundedNumber ===  2) {
    return <div>**000</div>
  } else if (roundedNumber === 3) {
    return <div>***00</div>
  } else if (roundedNumber ===  4) {
    return <div>****0</div>
  } else  
    return <div>*****</div>  
}

    return (
      <section className="my-3 text-start ms-3 me-3">
        <h1 className="mb-3 fw-bold ">{stars()}</h1>        
      </section>
    )
  }
  
  export default Rating