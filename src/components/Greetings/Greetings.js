
function Greetings({lang, children}){
  if(lang === 'de' ){
    return(
      <div className='row border border-dark m-5 d-flex justify-content-start align-items-center'>
        <p className='m-1'>Hallo {children}</p>
      </div>
    )
  }
  if(lang === 'en' ){
    return(
      <div className='row border border-dark m-5 d-flex justify-content-start align-items-center'>
        <p className='m-1'>Hello {children}</p>
      </div>
    )
  }
  if(lang === 'fr' ){
    return(
      <div className='row border border-dark m-5 d-flex justify-content-start align-items-center'>
        <p className='m-1'>Bonjour {children}</p>
      </div>
    )
  }
  if(lang === 'es' ){
    return(
      <div className='row border border-dark m-5 d-flex justify-content-start align-items-center'>
        <p className='m-1'>Hola {children}</p>
      </div>
    )
  }

}

export default Greetings