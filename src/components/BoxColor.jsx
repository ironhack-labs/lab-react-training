function BoxColor({r,g,b}){
    let colors='rgb($(r),$(g),$(b))';
    return (
        <div>
            <p>{r} and {g} and {b} and {colors}</p>
        </div>
    )
}
export default BoxColor;