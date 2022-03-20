function Rating({ children }) {
    return (
     <div className=' mb-3 mt-4'>
      <div className="row g-0 my-2 mx-2 " >
        <div className='d-flex justify-content-start'>
        {Math.round(children)  === 1 && '★☆☆☆☆' ||
         Math.round(children)=== 2 && '★★☆☆☆' || 
         Math.round(children)===3 && '★★★☆☆' ||
         Math.round(children)===4 && '★★★★☆' ||
         Math.round(children)===5 && '★★★★★'}
        </div>
      </div>
    </div>
    )

}

export default Rating





