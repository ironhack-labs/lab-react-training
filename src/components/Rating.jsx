function Rating(props){
    const {children}=props
    let number = Math.round(children)
    let empty = "☆".repeat(5-number)
    let full = "★".repeat(number)
    let string= full+empty
return(
    <div>
    {string}
    </div>
)
}
export default Rating