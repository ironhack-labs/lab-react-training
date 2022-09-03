
function Rating({children}) {
  
  const rating = children => {
    switch (Math.round(children)) {
      case 1:
        // podría usar una imagen con estrellas vacías y rellenas, pero me gusta sufrir
        return  <div>
        <span className='fa fa-star'/>&nbsp;
        <span className='fa fa-star-o'/>&nbsp;
        <span className='fa fa-star-o'/>&nbsp;
        <span className='fa fa-star-o'/>&nbsp;
        <span className='fa fa-star-o'/>
            </div>;
      case 2:
        return     <div>
        <span className='fa fa-star'/>&nbsp;
        <span className='fa fa-star'/>&nbsp;
        <span className='fa fa-star-o'/>&nbsp;
        <span className='fa fa-star-o'/>&nbsp;
        <span className='fa fa-star-o'/>
            </div>;
      case 3:
        return <div>
        <span className='fa fa-star'/>&nbsp;
        <span className='fa fa-star'/>&nbsp;
        <span className='fa fa-star'/>&nbsp;
        <span className='fa fa-star-o'/>&nbsp;
        <span className='fa fa-star-o'/>
            </div>;
      case 4:
        return <div>
        <span className='fa fa-star'/>&nbsp;
        <span className='fa fa-star'/>&nbsp;
        <span className='fa fa-star'/>&nbsp;
        <span className='fa fa-star'/>&nbsp;
        <span className='fa fa-star-o'/>
            </div>;
      case 5:
        return <div>
        <span className='fa fa-star'/>&nbsp;
        <span className='fa fa-star'/>&nbsp;
        <span className='fa fa-star'/>&nbsp;
        <span className='fa fa-star'/>&nbsp;
        <span className='fa fa-star'/>
            </div>;
      default:
        return  <div>
        <span className='fa fa-star fa-star-o'/>&nbsp;
        <span className='fa fa-star fa-star-o'/>&nbsp;
        <span className='fa fa-star fa-star-o'/>&nbsp;
        <span className='fa fa-star fa-star-o'/>&nbsp;
        <span className='fa fa-star fa-star-o'/>
            </div>;
    }
  }

  return (
    <div>
<h3> {rating(children)}</h3>
    </div>
  )
}

export default Rating