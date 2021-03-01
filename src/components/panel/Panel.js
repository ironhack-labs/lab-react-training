
function Panel({ className, children }) {
    return (
      <div className={`border border-2 border-dark p-2 ${className}`}>
        <h5 className="m-0">{children}</h5>
      </div>
    )
  }
    export default Panel;
  