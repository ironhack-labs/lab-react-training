function BoxColor({r,g,b}){
    let colors=`rgb(${r},${g},${b})`;
    return (
        <div>
            <p> {colors}</p>
        </div>
    )
}
export default BoxColor;