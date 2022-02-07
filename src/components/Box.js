function Box({ className, children }) {
    return (
        <div className={`border border-2 border-dark p-2 ${className} ${children}`}>
            <h4>{children}</h4>
        </div>
    )
}




export default Box