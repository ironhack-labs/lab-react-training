function BoxColor(props) {

    return (
      <div
        className="BoxColor"
         /*style=
           {
            `rgb(
            ${props.r},
            ${props.g},
            ${props.b}
            )`
           }*/
      >
      {`rgb(
        ${props.r},
        ${props.g},
        ${props.b}
        )`
      }
      </div>
    )

}
  
  export default BoxColor;